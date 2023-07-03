import { ICartItem } from '@/interfaces/interfaces';
import { Divider } from 'antd';
import React from 'react';
import { Box } from '../Box/Box';
import {
  ModelName,
  StyledOrderItem,
  StyledPrice,
  StyledProductQuantity,
} from './OrderItem.styled';
import { getPriceSpacesFormatted } from '@/utils/getPriceSpacesFormatted';
import Image from 'next/image';

type TProps = {
  item: ICartItem;
};

export const OrderItem = ({ item }: TProps) => {
  const {
    product: { aditional, options },
    quantity,
  } = item;
  return (
    <StyledOrderItem>
      <Box
        position="relative"
        display="flex"
        alignItems="center"
        width="100%"
        paddingRight={60}
      >
        <Box>
          <Image
            src={options.firstPhoto}
            alt={`${aditional.model} photo`}
            width={200}
            height={256}
            style={{ objectFit: 'contain', objectPosition: 'center' }}
          />
        </Box>
        <Box flexGrow={1}>
          <Box marginLeft={20}>
            <ModelName>{aditional.model}</ModelName>
            <p>{options.name}</p>
            <Box display="flex" justifyContent="space-between" marginTop={20}>
              <StyledPrice>
                {getPriceSpacesFormatted(options.price)} грн{' '}
                <StyledProductQuantity>x {quantity}</StyledProductQuantity>
              </StyledPrice>
              <StyledPrice>
                {getPriceSpacesFormatted(options.price * quantity)} грн
              </StyledPrice>
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider />
    </StyledOrderItem>
  );
};
