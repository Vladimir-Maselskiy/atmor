'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useCartContext } from '@/context/state';
import { useRouter } from 'next/navigation';
import {
  FieldWrapper,
  OrderItemsTitle,
  StyledForm,
  StyledInput,
} from './UserForm.styled';
import { Button, Form, InputRef } from 'antd';
import { getAutoCompletedPhoneValue } from '@/utils/getAutoCompletedPhoneValue';
import { Box } from '../Box/Box';
import { OrderItem } from '../OrderItem/OrderItem';

type TTgiggerTypes = 'onBlur' | 'onChange';

const triggers = {
  surname: 'onBlur',
  name: 'onBlur',
  email: 'onBlur',
  phone: 'onBlur',
} as { [key: string]: TTgiggerTypes };

export const UserForm = () => {
  const { cart, setCart } = useCartContext();
  const ref = useRef<HTMLButtonElement>(null);
  const phoneInputRef = useRef<InputRef>(null);
  const router = useRouter();

  const [form] = Form.useForm();

  const [validateTrigger, setValidateTrigger] = useState(triggers);
  const [phoneValue, setPhoneValue] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectionStart, setSelectionStart] = useState(0);

  useEffect(() => {
    if (isDeleting) {
      phoneInputRef.current?.input?.setSelectionRange(
        selectionStart,
        selectionStart
      );
    } else {
      setTimeout(() => {
        console.log('phoneValue', phoneValue.length);
        phoneInputRef.current?.input?.setSelectionRange(
          phoneValue.length,
          phoneValue.length
        );
      }, 0);
    }
  }, [isDeleting, phoneValue.length, selectionStart]);

  const onPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const onFinish = (values: unknown) => {
    setTimeout(() => {
      router.push('/thank-page');
    }, 1000);
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
      return Promise.reject(`${label} обов'язкове`);
    }
    if (!/^[\u0400-\u04FF']{2,}$/i.test(value)) {
      return Promise.reject(`Введіть ${label.toLowerCase()} кирилицею`);
    }

    setValidateTrigger(prev => ({ ...prev, [prop]: 'onBlur' }));

    return Promise.resolve();
  };

  const validateEmail = (formField: any, value: any) => {
    console.log('formField', formField);
    setValidateTrigger(prev => ({ ...prev, email: 'onChange' }));
    if (!value) {
      return Promise.reject(`Email обов'язковий`);
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
      return Promise.reject(`Введіть електронну пошту`);
    }
    setValidateTrigger(prev => ({ ...prev, email: 'onBlur' }));

    return Promise.resolve();
  };

  return (
    <StyledForm layout="vertical" form={form} onFinish={onFinish}>
      <Box>
        <FieldWrapper
          name="user-phone"
          label="Номер телефону"
          rules={[{ required: true, message: 'Введіть номер телефону' }]}
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
            <StyledInput placeholder="Введіть ваше ім'я"></StyledInput>
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
            <StyledInput placeholder="Введіть ваше прізвище"></StyledInput>
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
          <StyledInput placeholder="Введіть ваш email"></StyledInput>
        </FieldWrapper>

        <FieldWrapper>
          <Button
            style={{ borderRadius: 0 }}
            type="primary"
            htmlType="submit"
            ref={ref}
          >
            Підтвердити
          </Button>
        </FieldWrapper>
      </Box>
      <Box>
        <OrderItemsTitle>ТОВАРИ В ЗАМОВЛЕННІ</OrderItemsTitle>
        <ul>
          {cart.map(item => (
            <OrderItem key={item.product.options.article} item={item} />
          ))}
        </ul>
      </Box>
    </StyledForm>
  );
};
