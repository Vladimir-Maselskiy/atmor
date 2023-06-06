'use client';
import React, { useEffect } from 'react';
import { Box } from '../Box/Box';
import { Collapse, Divider, Descriptions, Button } from 'antd';
import {
  ModelName,
  PanelText,
  StyledItem,
  StyledPrice,
} from './ProductItem.styled';
import { IAtmorItem, ICartItem } from '@/interfaces/interfaces';
import { width } from 'styled-system';
import { getPriceSpacesFormatted } from '@/utils/getPriceSpacesFormatted';
import { useCartContext } from '@/context/state';
import Image from 'next/image';

const { Panel } = Collapse;

type TProps = {
  product: IAtmorItem;
};

export const ProductItem = ({ product }: TProps) => {
  const { options, aditional } = product;
  const { cart, setCart } = useCartContext();

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const onBuyButtonCkick = () => {
    const index = cart.findIndex(item => {
      return item.product.options.article === options.article;
    });
    if (index === -1) {
      setCart(prev => [...prev, { product, quantity: 1 }]);
      return;
    }
    const currentProduct: ICartItem = {
      ...cart[index],
      quantity: cart[index].quantity + 1,
    };
    setCart(prev => {
      prev[index] = currentProduct;
      return [...prev];
    });
  };
  return (
    <StyledItem>
      <Box display="flex">
        <Box>
          <Image
            src={options.firstPhoto}
            alt={`${aditional.model} photo`}
            width={200}
            height={256}
            style={{ objectFit: 'contain', objectPosition: 'center' }}
          />
        </Box>
        <Box lineHeight={1.5} paddingTop={40} width={500}>
          <Box marginLeft={116}>
            <StyledPrice>
              {getPriceSpacesFormatted(options.price)} грн
            </StyledPrice>
            <Button onClick={onBuyButtonCkick}>Купити</Button>
            <ModelName>{aditional.model}</ModelName>
            <p>{options.name}</p>
          </Box>
          <Collapse
            ghost
            style={{ marginTop: 20, marginLeft: 100, maxWidth: 300 }}
            size="large"
          >
            <Panel
              header="ХАРАКТЕРИСТИКИ"
              key="1"
              style={{
                width: 600,
              }}
            >
              <Descriptions title="Основні характеристики" column={1}>
                <Descriptions.Item label="Країна-виробник">
                  {options.country}
                </Descriptions.Item>
                <Descriptions.Item label="Продуктивність (ΔТ=25°C)">
                  {`${options.productivity} л.хв`}
                </Descriptions.Item>
                <Descriptions.Item label="Потужність">
                  {`${options.power} кВт`}
                </Descriptions.Item>
                <Descriptions.Item label="Напруга живлення">
                  {`${aditional.supplyVoltage}В`}
                </Descriptions.Item>
                <Descriptions.Item label="Тип">
                  {aditional.type}
                </Descriptions.Item>
              </Descriptions>
            </Panel>
          </Collapse>
        </Box>
      </Box>
      <Divider />
    </StyledItem>
  );
};
