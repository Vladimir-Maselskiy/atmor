'use client';
import React, { useEffect } from 'react';
import { Box } from '../Box/Box';
import { Collapse, Divider, Descriptions, Button } from 'antd';
import {
  ModelName,
  ModelTitle,
  PanelText,
  StyledItem,
  StyledPrice,
} from './ProductItem.styled';
import { IAtmorItem, ICartItem } from '@/interfaces/interfaces';
import { getPriceSpacesFormatted } from '@/utils/getPriceSpacesFormatted';
import { useCartContext } from '@/context/state';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const { Panel } = Collapse;

type TProps = {
  product: IAtmorItem;
};

export const ProductItem = ({ product }: TProps) => {
  const { options, aditional } = product;
  const { cart, setCart } = useCartContext();
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
      <Box display="flex">
        <Box>
          <Link href={`/products/${aditional.model}/${options.article}`}>
            <Image
              src={options.firstPhoto}
              alt={`${aditional.model} photo`}
              width={200}
              height={256}
              style={{ objectFit: 'contain', objectPosition: 'center' }}
            />
          </Link>
        </Box>
        <Box lineHeight={1.5} paddingTop={40} width={500}>
          <Box marginLeft={116}>
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
            <ModelName>{aditional.model}</ModelName>
            <ModelTitle>{options.name}</ModelTitle>
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
              </Descriptions>
            </Panel>
          </Collapse>
        </Box>
      </Box>
      <Divider />
    </StyledItem>
  );
};
