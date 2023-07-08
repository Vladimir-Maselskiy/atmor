import React, { useEffect, useState } from 'react';
import { FormInstance, Select } from 'antd';
import type { SelectProps } from 'antd';
import { TFormValidatonType } from '../UserForm/UserForm';
import { getIsDeliveryWarehouseValid } from '@/utils/getIsDeliveryWarehouseValid';

type TProps = {
  cityRef: string;
  form: FormInstance<any>;
  setFormValidation: React.Dispatch<React.SetStateAction<TFormValidatonType>>;
};

let timeout: ReturnType<typeof setTimeout> | null;
const url = `${process.env.NEXT_PUBLIC_API_HOST}/novaposhta/searchWarehouses`;

export const SearchWarehousesInput = ({
  cityRef,
  form,
  setFormValidation,
}: TProps) => {
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

    timeout = setTimeout(() => SearchByString(newValue), 3000);
  };

  const handleChange = (newValue: any) => {
    setValue(newValue);

    form.setFieldValue('user-warehouse', newValue);
    const isDeliveryWarehouseValid = getIsDeliveryWarehouseValid(
      newValue as string
    );
    setFormValidation(p => ({ ...p, warehouse: isDeliveryWarehouseValid }));
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
