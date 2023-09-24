'use client';
import React, { useEffect } from 'react';
import { Box } from '../Box/Box';
import { Collapse, Divider, Descriptions, Button } from 'antd';
import {
  ModelName,
  ModelTitle,
  PanelText,
  StyledImageBox,
  StyledItem,
  StyledItemContent,
  StyledPrice,
} from './ProductItem.styled';
import { IAtmorItem, ICartItem } from '@/interfaces/interfaces';
import { getPriceSpacesFormatted } from '@/utils/getPriceSpacesFormatted';
import { useCartContext } from '@/context/state';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useMediaQuery } from '@/hooks';

const { Panel } = Collapse;

type TProps = {
  product: IAtmorItem;
};

export const ProductItem = ({ product }: TProps) => {
  const { options, aditional } = product;
  const { cart, setCart } = useCartContext();
  const isMoreThan768 = useMediaQuery(768);

  const route = useRouter();

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const onBuyButtonCkick = () => {
    const index = cart.findIndex(item => {
      return item.product.options.article === options.article;
    });
    if (index === -1) {
      setCart(prev => [...prev, { product, quantity: 1 }]);
    } else {
      const currentProduct: ICartItem = {
        ...cart[index],
        quantity: cart[index].quantity + 1,
      };
      setCart(prev => {
        prev[index] = currentProduct;
        return [...prev];
      });
    }
    setTimeout(() => {
      route.push('/cart');
    }, 500);
  };
  return (
    <StyledItem>
      <StyledItemContent>
        <StyledImageBox>
          <Link href={`/products/${aditional.model}/${options.article}`}>
            <Image
              src={options.firstPhoto}
              alt={`${aditional.model} photo`}
              style={{ objectFit: 'contain', objectPosition: 'center' }}
              fill
            />
          </Link>
        </StyledImageBox>
        <Box
          lineHeight={1.5}
          paddingTop={40}
          width={isMoreThan768 ? 500 : '100%'}
        >
          <Box marginLeft={isMoreThan768 ? 116 : 0}>
            <Box width={140} marginLeft={isMoreThan768 ? 0 : 'auto'}>
              <StyledPrice>
                {getPriceSpacesFormatted(options.price)} грн
              </StyledPrice>
              <Button
                type="primary"
                style={{
                  backgroundColor: 'var(--accent-color)',
                  fontWeight: 600,
                  boxShadow: 'none',
                  marginTop: 20,
                  width: 140,
                  borderRadius: 0,
                }}
                onClick={onBuyButtonCkick}
              >
                Купити
              </Button>
            </Box>
            <ModelName>{aditional.model}</ModelName>
            <ModelTitle>{options.name}</ModelTitle>
          </Box>
          <Collapse
            ghost
            style={{
              marginTop: 20,
              marginLeft: 100,
              maxWidth: 300,
              overflowX: 'scroll',
            }}
            size="large"
          >
            <Panel
              header="ХАРАКТЕРИСТИКИ"
              key="1"
              style={{
                width: 300,
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
              </Descriptions>
            </Panel>
          </Collapse>
        </Box>
      </StyledItemContent>
      <Divider />
    </StyledItem>
  );
};
