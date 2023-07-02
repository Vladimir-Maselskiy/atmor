import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import type { SelectProps } from 'antd';

type TProps = {
  cityRef: string;
};

let timeout: ReturnType<typeof setTimeout> | null;
const url = `${process.env.NEXT_PUBLIC_API_HOST}/novaposhta/searchWarehouses`;

export const SearchWarehousesInput = ({ cityRef }: TProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState('');
  const [warehouses, setWarehouses] = useState<SelectProps['options']>([]);

  useEffect(() => {
    const options = {
      method: 'POST',
      body: JSON.stringify({ cityRef }),
    };

    fetch(url, options)
      .then(res => res.json())
      .then(setWarehouses)
      .catch(_ => setWarehouses([]))
      .finally(() => {
        setIsLoading(false);
      });
  }, [cityRef]);

  useEffect(() => {
    setValue('');
  }, [cityRef]);

  const handleSearch = (newValue: string) => {
    console.log('handleSearch newValue', newValue);
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    const SearchByString = (stringValue: string) => {
      setIsLoading(true);
      const options = {
        method: 'POST',
        body: JSON.stringify({ cityRef, findByString: stringValue }),
      };
      fetch(url, options)
        .then(res => res.json())
        .then(setWarehouses)
        .catch(_ => setWarehouses([]))
        .finally(() => {
          setIsLoading(false);
        });
    };

    timeout = setTimeout(() => SearchByString(newValue), 300);
  };

  const handleChange = (newValue: any) => {
    setValue(newValue);
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
      options={(warehouses || []).map(warehous => ({
        value: warehous.Description,
        label: warehous.Description,
      }))}
    />
  );
};
