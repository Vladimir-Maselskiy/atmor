export const getPriceSpacesFormatted = (price: number) => {
  const stringPrice = price.toString();
  const characters = stringPrice.split('');
  let formattedPrice: string[] = [];
  characters.reverse().forEach((char, index) => {
    if ((index + 1) % 3 === 0) {
      formattedPrice.push(` ${char}`);
      return;
    }
    formattedPrice.push(char);
  });
  return formattedPrice.reverse().join('');
};
