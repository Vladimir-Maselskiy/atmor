export const createError = (status: number, message: string) => {
  const error = new Error();
  error.cause = status;
  error.message = message;
  return error;
};
