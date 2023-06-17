import { ICartItem } from '@/interfaces/interfaces';
import { Divider, Image } from 'antd';
import React from 'react';
import { Box } from '../Box/Box';
import { ModelName, StyledOrderItem, StyledPrice } from './OrderItem.styled';
import { getPriceSpacesFormatted } from '@/utils/getPriceSpacesFormatted';

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
          </Box>
          <StyledPrice>
            {getPriceSpacesFormatted(options.price * quantity)} грн
          </StyledPrice>
        </Box>
      </Box>
      <Divider />
    </StyledOrderItem>
  );
};
