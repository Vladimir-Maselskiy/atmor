export const getAutoCompletedPhoneValue = ({
  phoneValue,
  value,
}: {
  phoneValue: string;
  value: string;
}) => {
  const numberPrefix = '+38 (0';
  const lastChar = value.slice(value.length - 1);
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
  if (value.length === 13 || value.length === 16)
    return value.slice(0, value.length - 1) + '-' + lastChar;
  if (value.length >= 19) return phoneValue;
  return value;
};
