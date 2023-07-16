import React, { useState } from 'react';
import { FormInstance, Select } from 'antd';
import type { SelectProps } from 'antd';
import { getCityPresent } from '@/utils/getCityPresent';
import { TFormValidatonType } from '../UserForm/UserForm';
import { getIsDeliveryCityValid } from '@/utils/getIsDeliveryCityValid';

type TProps = {
  setCityRef: React.Dispatch<React.SetStateAction<string>>;
  form: FormInstance<any>;
  setFormValidation: React.Dispatch<React.SetStateAction<TFormValidatonType>>;
};

let timeout: ReturnType<typeof setTimeout> | null;

export const SearchCityInput = ({
  setCityRef,
  form,
  setFormValidation,
}: TProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState('');
  const [deliveryCities, setDeliveryCities] = useState<SelectProps['options']>(
    []
  );

  const handleSearch = (newValue: string) => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    const searchCity = (value: string) => {
      const cityName = value;

      const url = `${process.env.NEXT_PUBLIC_API_HOST}/novaposhta/searchCity`;

      const options = {
        method: 'POST',
        body: JSON.stringify({ cityName }),
      };
      setIsLoading(true);

      fetch(url, options)
        .then(res => res.json())
        .then(setDeliveryCities)
        .catch(_ => setDeliveryCities([]))
        .finally(() => {
          setIsLoading(false);
        });
    };

    timeout = setTimeout(() => searchCity(newValue), 300);
  };

  const handleChange = (newValue: any) => {
    setCityRef(newValue);
    const cityPresent = getCityPresent({ deliveryCities, newValue });
    form.setFieldValue('user-city', cityPresent);
    setValue(newValue);
    const isDeliveryCityValid = getIsDeliveryCityValid(newValue as string);
    setFormValidation(p => ({ ...p, city: isDeliveryCityValid }));
  };

  return (
    <Select
      value={value}
      showSearch
      dropdownAlign={{ overflow: { adjustX: false, adjustY: false } }}
      allowClear={!isLoading}
      loading={isLoading}
      placeholder="Введіть населений пункт доставки"
      style={{ width: '100%', maxWidth: 424, borderRadius: 0 }}
      size="large"
      defaultActiveFirstOption={false}
      filterOption={false}
      onChange={handleChange}
      onSearch={handleSearch}
      notFoundContent={null}
      placement="bottomRight"
      listHeight={160}
      options={(deliveryCities || []).map(city => ({
        value: city.DeliveryCity,
        label: city.Present,
      }))}
    />
  );
};
