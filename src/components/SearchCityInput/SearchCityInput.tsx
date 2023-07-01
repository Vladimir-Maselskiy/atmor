import React, { useState } from 'react';
import { Select } from 'antd';
import type { SelectProps } from 'antd';

let timeout: ReturnType<typeof setTimeout> | null;

export const SearchCityInput = () => {
  const [cityRef, setCityRef] = useState('');
  const [deliveryCities, setDeliveryCities] = useState<SelectProps['options']>(
    []
  );
  const [value, setValue] = useState<string>();

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

      fetch(url, options)
        .then(res => res.json())
        .then(setDeliveryCities);
    };

    if (newValue) {
      console.log('setTimeout');
      timeout = setTimeout(() => searchCity(newValue), 2000);
    }
  };

  const handleChange = (newValue: any) => {
    setCityRef(newValue);
  };

  return (
    <Select
      showSearch
      value={value}
      placeholder="Введіть населений пункт доставки"
      style={{ width: '100%' }}
      defaultActiveFirstOption={false}
      showArrow={false}
      filterOption={false}
      onChange={handleChange}
      onSearch={handleSearch}
      notFoundContent={null}
      options={(deliveryCities || []).map(city => ({
        value: city.Ref,
        label: city.Present,
      }))}
    />
  );
};
