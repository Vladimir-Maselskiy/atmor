'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FieldWrapper, StyledForm, StyledInput } from './UserForm.styled';
import { Button, Divider, Form, InputRef } from 'antd';
import { getAutoCompletedPhoneValue } from '@/utils/getAutoCompletedPhoneValue';
import { Box } from '../Box/Box';
import { SearchCityInput } from '../SearchCityInput/SearchCityInput';
import { SearchWarehousesInput } from '../SearchWarehousesInput/SearchWarehousesInput';
import { OrderList } from '../OrderList/OrderList';
import { getIsFormSubmitDisabled } from '@/utils/getIsFormSubmitDisabled';
import { RadioPaymentMethod } from '../RadioPaymentMethod/RadioPaymentMethod';
import { useCartContext } from '@/context/state';
import { getMessageForTelegramBot } from '@/utils/getMessageForTelegramBot';
import { availableUkraineOperatorsCodes } from '@/data/availableUkraineOperatorsCodes';
import { Spinner } from '../Spinner/Spinner';

type TTgiggerTypes = 'onBlur' | 'onChange';

const triggers = {
  surname: 'onBlur',
  name: 'onBlur',
  email: 'onBlur',
  phone: 'onBlur',
} as { [key: string]: TTgiggerTypes };

const initialFormValidation = {
  phone: false,
  name: false,
  surname: false,
  email: false,
  city: false,
  warehouse: false,
};

export type TFormValidatonType = typeof initialFormValidation;

export const UserForm = () => {
  const ref = useRef<HTMLButtonElement>(null);
  const phoneInputRef = useRef<InputRef>(null);
  const { cart, setCart } = useCartContext();
  const router = useRouter();
  const [form] = Form.useForm();

  const [validateTrigger, setValidateTrigger] = useState(triggers);
  const [phoneValue, setPhoneValue] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectionStart, setSelectionStart] = useState(0);
  const [cityRef, setCityRef] = useState('');
  const [isFormSubmitDisabled, setIsFormSubmitDisabled] = useState(true);
  const [formValidation, setFormValidation] = useState(initialFormValidation);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isDeleting) {
      phoneInputRef.current?.input?.setSelectionRange(
        selectionStart,
        selectionStart
      );
    } else {
      setTimeout(() => {
        phoneInputRef.current?.input?.setSelectionRange(
          phoneValue.length,
          phoneValue.length
        );
      }, 0);
    }
  }, [isDeleting, phoneValue.length, selectionStart]);

  useEffect(() => {
    setIsFormSubmitDisabled(getIsFormSubmitDisabled(formValidation));
  }, [formValidation]);

  const onPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFormSubmitDisabled(true);
    const { value } = e.target;
    const selectionStart = phoneInputRef.current?.input?.selectionStart;
    if (selectionStart) setSelectionStart(selectionStart);
    const autoCompletedPhoneValue = getAutoCompletedPhoneValue({
      phoneValue,
      value,
      selectionStart,
    });
    form.setFieldsValue({ 'user-phone': autoCompletedPhoneValue });
    setIsDeleting(phoneValue.length - value.length > 0 ? true : false);
    setPhoneValue(autoCompletedPhoneValue);
  };

  const onFinish = async (values: unknown) => {
    const url = `https://atmor-telegram-bot.vercel.app/api`;

    const options = {
      method: 'POST',
      body: JSON.stringify({
        message: getMessageForTelegramBot(values, cart),
        fromSite: true,
      }),
    };

    setIsLoading(true);
    const res = await fetch(url, options)
      .then(res => {
        return res.json();
      })
      .catch(console.log)
      .finally(() => {
        setIsLoading(false);
      });

    setCart([]);
    localStorage.setItem('cart', JSON.stringify([]));
    router.push('./thanks-page');
  };

  const validateNameAndSurName = (formField: any, value: any) => {
    const { field }: { field: 'user-name' | 'user-surname' } = formField;
    let label = '';
    let prop = field.split('-')[1];
    if (field === 'user-name') {
      label = "Ім'я";
    }
    if (field === 'user-surname') {
      label = 'Прізвище';
    }
    setValidateTrigger(prev => ({ ...prev, [prop]: 'onChange' }));

    if (!value) {
      setFormValidation(prev => ({ ...prev, [prop]: false }));
      return Promise.reject(`${label} обов'язкове`);
    }
    if (!/^[\u0400-\u04FF']{2,}$/i.test(value)) {
      setFormValidation(prev => ({ ...prev, [prop]: false }));
      return Promise.reject(`Введіть ${label.toLowerCase()} кирилицею`);
    }
    setValidateTrigger(prev => ({ ...prev, [prop]: 'onBlur' }));
    setFormValidation(prev => ({ ...prev, [prop]: true }));
    return Promise.resolve();
  };

  const validatePhone = (_: any, value: any) => {
    if (!value) {
      return Promise.reject(`Номер телефону обов'язковий`);
    }
    const phoneOnlyNumbers = phoneValue
      .split('')
      .filter(char => /^[0-9]$/.test(char))
      .join('');
    const phoneOperatorCode = phoneOnlyNumbers.slice(2, 5);

    if (
      phoneOnlyNumbers.length !== 12 ||
      phoneOperatorCode.length !== 3 ||
      !availableUkraineOperatorsCodes.includes(phoneOperatorCode)
    ) {
      setFormValidation(prev => ({ ...prev, phone: false }));
      return Promise.reject('Введіть валідний номер телефону');
    }
    setFormValidation(prev => ({ ...prev, phone: true }));
    return Promise.resolve();
  };

  const validateEmail = (_: any, value: any) => {
    setValidateTrigger(prev => ({ ...prev, email: 'onChange' }));
    if (!value) {
      setFormValidation(prev => ({ ...prev, email: false }));
      return Promise.reject(`Email обов'язковий`);
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
      setFormValidation(prev => ({ ...prev, email: false }));
      return Promise.reject(`Введіть електронну пошту`);
    }
    setValidateTrigger(prev => ({ ...prev, email: 'onBlur' }));

    setFormValidation(prev => ({ ...prev, email: true }));
    return Promise.resolve();
  };

  const validateCity = (_: any, value: any) => {
    if (!value) {
      return Promise.reject(`Виберіть населений пункт`);
    }
    return Promise.resolve();
  };

  return (
    <>
      {isLoading && <Spinner />}
      <StyledForm layout="vertical" form={form} onFinish={onFinish}>
        <Box>
          <FieldWrapper
            name="user-phone"
            label="Номер телефону"
            validateTrigger={[validateTrigger.phone]}
            rules={[{ required: true, validator: validatePhone }]}
          >
            <StyledInput
              ref={phoneInputRef}
              placeholder="Введіть номер телефону"
              onChange={onPhoneChange}
            ></StyledInput>
          </FieldWrapper>

          <Box display="flex" gridGap={40}>
            <FieldWrapper
              name="user-name"
              label="Ім'я"
              validateTrigger={[validateTrigger.name]}
              rules={[
                {
                  required: true,
                  validator: validateNameAndSurName,
                },
              ]}
            >
              <StyledInput
                placeholder="Введіть ваше ім'я"
                onChange={() => {
                  setIsFormSubmitDisabled(true);
                }}
              ></StyledInput>
            </FieldWrapper>

            <FieldWrapper
              name="user-surname"
              label="Прізвище"
              validateTrigger={[validateTrigger.surname]}
              rules={[
                {
                  required: true,
                  validator: validateNameAndSurName,
                },
              ]}
            >
              <StyledInput
                placeholder="Введіть ваше прізвище"
                onChange={() => {
                  setIsFormSubmitDisabled(true);
                }}
              ></StyledInput>
            </FieldWrapper>
          </Box>
          <FieldWrapper
            name="user-email"
            label="Email адреса"
            validateTrigger={[validateTrigger.email]}
            rules={[
              {
                required: true,
                validator: validateEmail,
              },
            ]}
          >
            <StyledInput
              placeholder="Введіть ваш email"
              onChange={() => {
                setIsFormSubmitDisabled(true);
              }}
            ></StyledInput>
          </FieldWrapper>

          <Divider />

          <p>Відомості щодо доставки</p>
          <FieldWrapper
            name="user-city"
            label="Населений пункт"
            validateTrigger="onChange"
            style={{ marginTop: 20 }}
            rules={[
              {
                required: true,
                validator: validateCity,
              },
            ]}
          >
            <SearchCityInput
              setCityRef={setCityRef}
              form={form}
              setFormValidation={setFormValidation}
            />
          </FieldWrapper>

          {cityRef && (
            <FieldWrapper
              name="user-warehouse"
              label="Відділення Нової Пошти"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <SearchWarehousesInput
                cityRef={cityRef}
                form={form}
                setFormValidation={setFormValidation}
              />
            </FieldWrapper>
          )}
        </Box>
        <Box>
          <OrderList />
          <FieldWrapper
            name="paymaent-method"
            label="Спосіб оплати"
            style={{ marginTop: 20 }}
            initialValue={'upon receipt'}
          >
            <RadioPaymentMethod
              form={form}
              setFormValidation={setFormValidation}
            />
          </FieldWrapper>
          <FieldWrapper>
            <Button
              disabled={isFormSubmitDisabled}
              style={{ borderRadius: 0, marginTop: 20 }}
              type="primary"
              htmlType="submit"
              ref={ref}
            >
              Підтвердити
            </Button>
          </FieldWrapper>
        </Box>
      </StyledForm>
    </>
  );
};
