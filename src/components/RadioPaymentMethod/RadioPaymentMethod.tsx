import { FormInstance, Input, Radio, RadioChangeEvent, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { TFormValidatonType } from '../UserForm/UserForm';
import { TPaymemtMethod } from '@/interfaces/interfaces';

type TProps = {
  form: FormInstance<any>;
  setFormValidation: React.Dispatch<React.SetStateAction<TFormValidatonType>>;
};

export const RadioPaymentMethod = ({ form, setFormValidation }: TProps) => {
  const [value, setValue] = useState<TPaymemtMethod>('upon receipt');
  const [otherInputValue, setOtherInputValue] = useState<string>('');
  const [otherInputCombineValue, setOtherInputCombineValue] = useState<string>(
    value + otherInputValue
  );

  useEffect(() => {
    form.setFieldValue(
      'paymaent-method',
      value.startsWith('other') ? otherInputCombineValue : value
    );
  }, [otherInputCombineValue, value, form]);

  const onOtherInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: newValue } = e.target;
    setOtherInputValue(newValue);
    setOtherInputCombineValue(`${value}/${newValue}`);
  };

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    const { value } = e.target;
    setValue(value);
  };
  return (
    <Radio.Group onChange={onChange} value={value}>
      <Space
        direction="vertical"
        style={{ height: 120, justifyContent: 'space-between' }}
      >
        <Radio value={'upon receipt'}>Оплата при отриманні</Radio>
        <Radio value={'liqpay'}>LiqPay</Radio>
        <Radio value={'other'}>
          Інший...
          {value === 'other' ? (
            <Input
              value={otherInputValue}
              onChange={onOtherInputChange}
              style={{ width: 200, marginLeft: 10 }}
            />
          ) : null}
        </Radio>
      </Space>
    </Radio.Group>
  );
};
