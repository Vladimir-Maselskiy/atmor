
import { ICartItem } from '@/interfaces/interfaces';
import React, { useState, useEffect, use } from 'react';
import { ModelName, StyledCartItem, StyledPrice } from './CartItem.styled';
import { Box } from '../Box/Box';
import Image from 'next/image';
import { getPriceSpacesFormatted } from '@/utils/getPriceSpacesFormatted';
import { Button, Divider, InputNumber } from 'antd';
import { useCartContext } from '@/context/state';
import { CloseOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';

type TProps = {
  item: ICartItem;
};

export const CartItem = ({ item }: TProps) => {
  const { cart, setCart } = useCartContext();
  const {
    product: { aditional, options },
    quantity,
  } = item;
  const [inputValue, setInputValue] = useState<number>(quantity);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    setCart(prev => {
      const currentItem = prev.find(
        item => item.product.options.article === options.article
      )!;
      let value = inputValue;
      if (inputValue > 100) value = 100;
      if (value && value < 1) value = 1;
      currentItem.quantity = value;
      return [...prev];
    });
  }, [inputValue]);

  const onInputChange = (value: number | null, article: string) => {
    if (value) setInputValue(value);
  };

  const onAddonClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    const element = e.target as HTMLSpanElement;
    const data = element.dataset.icon as 'minus' | 'plus';
    let value = data === 'minus' ? inputValue - 1 : inputValue + 1;
    if (value > 100) value = 100;
    if (value < 1) value = 1;
    setInputValue(value);
  };

  const onCloseButtonClick = () => {
    setCart(prev => {
      const index = prev.findIndex(
        item => item.product.options.article === options.article
      )!;
      console.log('index', index);
      prev.splice(index, 1);
      return [...prev];
    });
  };

  return (
    <StyledCartItem>
      <Box position="relative" display="flex" width="100%" paddingRight={60}>
        <Box>
          <Image
            src={options.firstPhoto}
            alt={`${aditional.model} photo`}
            width={200}
            height={256}
            style={{ objectFit: 'contain', objectPosition: 'center' }}
          />
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          flexGrow={1}
          lineHeight={1.5}
          paddingTop={40}
          width={500}
        >
          <Box marginLeft={116}>
            <ModelName>{aditional.model}</ModelName>
            <p>{options.name}</p>
            <InputNumber
              addonBefore={
                <MinusOutlined
                  onClick={onAddonClick}
                  style={{ fontSize: 20 }}
                />
              }
              addonAfter={
                <PlusOutlined onClick={onAddonClick} style={{ fontSize: 20 }} />
              }
              min={1}
              max={100}
              controls={false}
              size="large"
              value={inputValue}
              onChange={(value: number | null) =>
                onInputChange(value, options.article)
              }
              style={{
                marginTop: 10,
                fontSize: 50,
                lineHeight: 3,
                width: 140,
                textAlign: 'center',
                borderRadius: 8,
              }}
            />
          </Box>
          <StyledPrice>
            {getPriceSpacesFormatted(options.price * quantity)} грн
          </StyledPrice>
        </Box>
        <CloseOutlined
          style={{ position: 'absolute', top: 20, right: 20 }}
          onClick={onCloseButtonClick}
        />
      </Box>
      <Divider />
    </StyledCartItem>
  );
};
