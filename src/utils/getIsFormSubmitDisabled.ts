import { TFormValidatonType } from '@/components/UserForm/UserForm';

export const getIsFormSubmitDisabled = (formValidation: TFormValidatonType) => {
  return Object.values(formValidation).some(value => value === false);
};
