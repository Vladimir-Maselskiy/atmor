export const getAutoCompletedPhoneValue = ({
  phoneValue,
  value,
}: {
  phoneValue: string;
  value: string;
}) => {
  const filteredPhoneValue =
    '+' +
    value
      .split('')
      .filter(char => /^[0-9]$/.test(char))
      .join('');

  const numberPrefix = '+38 (0';
  const lastChar = value.slice(value.length - 1);

  console.log('value.slice', value.slice(0, Math.min(value.length, 6)));

  if (
    value.length <= phoneValue.length &&
    value.slice(0, Math.min(value.length, 6)) !==
      numberPrefix.slice(0, Math.min(value.length, 6))
  )
    return phoneValue;
  if (value.length <= phoneValue.length) return value;
  if (value.length === 0) return '';
  if (value.length <= 6) {
    const index = numberPrefix.indexOf(lastChar);
    if (index === -1 && /^[0-9]$/.test(lastChar))
      return numberPrefix + lastChar;
    if (index === -1) return numberPrefix;
    return numberPrefix.slice(0, index + 1);
  }

  if (!/^[0-9]$/.test(lastChar)) {
    return phoneValue;
  }

  if (value.length === 9)
    return value.slice(0, value.length - 1) + ') ' + lastChar;
  if (value.length === 10)
    return value.slice(0, value.length - 1) + ' ' + lastChar;
  if (value.length === 14 || value.length === 17)
    return value.slice(0, value.length - 1) + '-' + lastChar;
  if (value.length >= 20) return phoneValue;
  return value;
};
