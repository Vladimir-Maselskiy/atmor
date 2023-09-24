import { IAtmorItem, ICartItem } from '@/interfaces/interfaces';
import { ProductWithSwiper } from '../ProductWithSwiper/ProductWithSwiper';
import { Box } from '../Box/Box';
import { getPriceSpacesFormatted } from '@/utils/getPriceSpacesFormatted';
import {
  DescriptionsBox,
  ProductBox,
  StyledDescriptions,
  StyledPrice,
} from './Product.styled';
import { Button, Descriptions } from 'antd';
import { useCartContext } from '@/context/state';
import { useRouter } from 'next/navigation';

type TProps = {
  product: IAtmorItem;
};

export const Product = ({ product }: TProps) => {
  const { cart, setCart } = useCartContext();
  const route = useRouter();
  const { options, aditional } = product;

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
    <ProductBox>
      <ProductWithSwiper product={product} />
      <DescriptionsBox>
        <StyledPrice>{`${getPriceSpacesFormatted(
          product.options.price
        )} грн`}</StyledPrice>
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
        <StyledDescriptions>
          <Descriptions title="Всі характеристики" column={1}>
            <Descriptions.Item label="Назва">{options.name}</Descriptions.Item>
            <Descriptions.Item label="Модель">
              {`${aditional.brand.toUpperCase()} ${aditional.model}`}
            </Descriptions.Item>
            <Descriptions.Item label="Артикул товару">
              {options.article}
            </Descriptions.Item>
            <Descriptions.Item label="Країна-виробник">
              {options.country}
            </Descriptions.Item>
            <Descriptions.Item label="Продуктивність (ΔТ=25°C)">
              {`${options.productivity} л.хв`}
            </Descriptions.Item>
            <Descriptions.Item label="Потужність">
              {`${options.power} кВт`}
            </Descriptions.Item>
            <Descriptions.Item label="Призначення">
              {aditional.appointment}
            </Descriptions.Item>
            <Descriptions.Item label="Комплетація">
              {aditional.completeSet}&quot;
            </Descriptions.Item>
            <Descriptions.Item label="Габарити">
              <Box>
                <p>{`висота ${aditional.height} см.`}</p>
                <p>{`ширина ${aditional.width} см.`}</p>
                <p>{`глибина ${aditional.depth} см.`}</p>
              </Box>
            </Descriptions.Item>
            <Descriptions.Item label="Монтаж">
              {aditional.insalation}
            </Descriptions.Item>
            <Descriptions.Item label="Використання">
              {aditional.using}
            </Descriptions.Item>
            <Descriptions.Item label="Вага">
              {`${aditional.weight} кг.`}
            </Descriptions.Item>
          </Descriptions>
        </StyledDescriptions>
      </DescriptionsBox>
    </ProductBox>
  );
};
