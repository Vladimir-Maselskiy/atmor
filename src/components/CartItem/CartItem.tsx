import { ICartItem } from '@/interfaces/interfaces';
import React, { useState, useEffect, use } from 'react';
import { ModelName, StyledCartItem, StyledPrice } from './CartItem.styled';
import { Box } from '../Box/Box';
import Image from 'next/image';
import { getPriceSpacesFormatted } from '@/utils/getPriceSpacesFormatted';
import { Divider, InputNumber } from 'antd';
import { useCartContext } from '@/context/state';

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

  return (
    <StyledCartItem>
      <Box display="flex" width="100%">
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
              value={inputValue}
              onChange={(value: number | null) =>
                onInputChange(value, options.article)
              }
              style={{
                marginTop: 10,
                marginLeft: 10,
                paddingTop: 8,
                paddingBottom: 8,
                fontSize: 20,
                border: '2px solid var(--accent-color)',
              }}
            />
          </Box>
          <StyledPrice>
            {getPriceSpacesFormatted(options.price)} грн
          </StyledPrice>
        </Box>
      </Box>
      <Divider />
    </StyledCartItem>
  );
};
