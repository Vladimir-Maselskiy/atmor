export type TFormValidation = {
  phone: boolean;
  name: boolean;
  surname: boolean;
  email: boolean;
};

export const getIsFormSubmitDisabled = (formValidation: TFormValidation) => {
  return Object.values(formValidation).some(value => value === false);
};
