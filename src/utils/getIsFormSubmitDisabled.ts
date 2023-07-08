import { TFormValidatonType } from '@/components/UserForm/UserForm';

export const getIsFormSubmitDisabled = (formValidation: TFormValidatonType) => {
  console.log('Object.values(formValidation)', Object.values(formValidation));
  return Object.values(formValidation).some(value => value === false);
};
