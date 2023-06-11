import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 30px 30px 17px;
  margin-top: 20px;
  border: 3px solid var(--accent-color);
  border-radius: 30px;
  min-width: 250px;
  width: 250px;
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.18;
`;
export const StyledInput = styled.input`
  margin-top: 26px;
  padding: 16px 23px;
  border: 1px solid var(--accent-color);
  border-radius: 16px;
  &:focus {
    outline: none;
  }
`;
