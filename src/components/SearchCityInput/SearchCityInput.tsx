import React, { useState } from 'react';
import { Select } from 'antd';
import type { SelectProps } from 'antd';

type TProps = {
  setCityRef: React.Dispatch<React.SetStateAction<string>>;
};

let timeout: ReturnType<typeof setTimeout> | null;

export const SearchCityInput = ({ setCityRef }: TProps) => {
  const [isLoading, setIsLoading] = useState(false);
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
  };

  return (
    <Select
      showSearch
      dropdownAlign={{ overflow: { adjustX: false, adjustY: false } }}
      allowClear={!isLoading}
      loading={isLoading}
      //   value={value}
      placeholder="Введіть населений пункт доставки"
      style={{ width: '100%', maxWidth: 424, borderRadius: 0 }}
      size="large"
      defaultActiveFirstOption={false}
      filterOption={false}
      onChange={handleChange}
      onSearch={handleSearch}
      notFoundContent={null}
      placement="bottomRight"
      options={(deliveryCities || []).map(city => ({
        value: city.DeliveryCity,
        label: city.Present,
      }))}
    />
  );
};
