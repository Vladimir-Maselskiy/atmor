import { IAtmorItem } from '@/interfaces/interfaces';
import { ProductWithSwiper } from '../ProductWithSwiper/ProductWithSwiper';
import { Box } from '../Box/Box';
import { getPriceSpacesFormatted } from '@/utils/getPriceSpacesFormatted';
import { DescriptionsBox, StyledPrice } from './Product.styled';
import { Descriptions } from 'antd';

type TProps = {
  product: IAtmorItem;
};

export const Product = ({ product }: TProps) => {
  const { options, aditional } = product;
  return (
    <Box
      display="flex"
      justifyContent="center"
      paddingTop={115}
      maxHeight="100vh"
    >
      <ProductWithSwiper product={product} />
      <DescriptionsBox>
        <StyledPrice>{`${getPriceSpacesFormatted(
          product.options.price
        )} грн`}</StyledPrice>
        <Box mt={40}>
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
              {aditional.completeSet}
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
        </Box>
      </DescriptionsBox>
    </Box>
  );
};
