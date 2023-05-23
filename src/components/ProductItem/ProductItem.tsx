'use client';
import React from 'react';
import { Box } from '../Box/Box';
import { Collapse, Divider, Descriptions, Button } from 'antd';
import { ModelName, PanelText } from './ProductItem.styled';
import { IAtmorItem } from '@/interfaces/interfaces';

const { Panel } = Collapse;

type TProps = {
  product: IAtmorItem;
};

export const ProductItem = ({ product }: TProps) => {
  const { options, aditional } = product;
  return (
    <Box display="flex">
      <Box>
        <img
          src={options.firstPhoto}
          alt={`${aditional.model} photo`}
          width={400}
        />
      </Box>
      <Box lineHeight={1.5} flexGrow={1} paddingTop={40}>
        <Box marginLeft={16}>
          <p>
            Ціна:<span>{options.price}</span>
          </p>
          <Button>Купити</Button>
          <ModelName>{aditional.model}</ModelName>
          <p>{options.name}</p>
        </Box>
        <Collapse expandIconPosition="end" ghost style={{ marginTop: 20 }}>
          <Panel header="ХАРАКТЕРИСТИКИ" key="1" style={{ fontSize: 24 }}>
            <Descriptions title="Основні характеристики" column={1}>
              <Descriptions.Item label="Країна-вирбник">
                {options.country}
              </Descriptions.Item>
              <Descriptions.Item label="Продуктивність (ΔТ=25°C)">
                {`${options.productivity} л.хв`}
              </Descriptions.Item>
              <Descriptions.Item label="Потужність">
                {`${options.power} кВт`}{' '}
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
        <Divider />
      </Box>
    </Box>
  );
};
