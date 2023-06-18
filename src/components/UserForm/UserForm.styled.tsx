import { Form, Input } from 'antd';
import styled from 'styled-components';
const { Item } = Form;

export const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;

  gap: 25px;
  padding: 30px 30px 17px;
  margin: 20px auto 0;
  min-width: 250px;
  width: 100%;
`;

export const FieldWrapper = styled(Item)`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled(Input)`
  padding: 16px 23px;
  &:hover {
    border: 1px solid var(--grey-border-color);
  }

  &:focus {
    outline: none;
    border: 1px solid var(--accent-color);
    box-shadow: none;
  }
`;
export const OrderItemsTitle = styled.p`
  font-weight: 700;
`;
