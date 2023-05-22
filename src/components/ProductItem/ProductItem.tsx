'use client';
import React from 'react';
import { Box } from '../Box/Box';
import { Collapse, Divider, Descriptions, Button } from 'antd';
import { ModelName, PanelText } from './ProductItem.styled';

const { Panel } = Collapse;
const { Item } = Descriptions;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export const ProductItem = () => {
  return (
    <Box display="flex">
      <Box>
        <img src="/products/basic210/7132517_3.jpeg" width={400} />
      </Box>
      <Box lineHeight={1.5} flexGrow={1} paddingTop={40}>
        <Box marginLeft={16}>
          <p>Ціна:</p>
          <Button>Купити</Button>
          <ModelName>Basic-210</ModelName>
          <p>Підігрівач з душовою насадкою</p>
        </Box>
        <Collapse expandIconPosition="end" ghost style={{ marginTop: 20 }}>
          <Panel header="ХАРАКТЕРИСТИКИ" key="1" style={{ fontSize: 24 }}>
            <PanelText>
              <Descriptions title="Основні характеристики" column={1}>
                <Descriptions.Item label="Країна-вирбник">
                  Ізраїль
                </Descriptions.Item>
                <Descriptions.Item label="Продуктивність (ΔТ=25°C)">
                  4 л.хв
                </Descriptions.Item>
                <Descriptions.Item label="Потужність">7 кВт</Descriptions.Item>
                <Descriptions.Item label="Напруга живлення">
                  220В
                </Descriptions.Item>
                <Descriptions.Item label="Тип">системний</Descriptions.Item>
              </Descriptions>
            </PanelText>
          </Panel>
        </Collapse>
        <Divider />
      </Box>
    </Box>
  );
};
