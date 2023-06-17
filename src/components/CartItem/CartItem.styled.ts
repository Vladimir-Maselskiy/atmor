import { InputNumber } from 'antd';
import styled from 'styled-components';

export const StyledCartItem = styled.li`
  width: 100%;
  margin: 0 auto;
`;

export const StyledPrice = styled.p`
  font-size: 32px;
  color: var(--accent-color);
  white-space: nowrap;
`;

export const ModelName = styled.p`
  font-weight: 700;
`;
export const InputNumberStyled = styled(InputNumber)`
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-size: 24px;
  width: 140px;
  text-align: center;
  border-radius: 8px;
`;
