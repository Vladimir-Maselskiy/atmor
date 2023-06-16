export const getAutoCompletedPhoneValue = ({
  phoneValue,
  value,
  selectionStart,
}: {
  phoneValue: string;
  value: string;
  selectionStart: number | null | undefined;
}) => {
  if (selectionStart && selectionStart === value.length && value < phoneValue)
    return value;
  let res = '';
  let indexPointer = 0;
  let patternIndexPointer = 0;

  const pattern = '+38 (0';
  const valuePrefix = value.slice(0, 6);

  // phone prefix logic block
  while (patternIndexPointer < pattern.length) {
    if (
      pattern.slice(patternIndexPointer).includes(valuePrefix[indexPointer])
    ) {
      res = res + valuePrefix[indexPointer];
      patternIndexPointer = pattern.indexOf(valuePrefix[indexPointer]) + 1;
      indexPointer += 1;
      if (indexPointer >= valuePrefix.length) {
        break;
      }
      continue;
    }

    patternIndexPointer = pattern.length;
  }

  const restValuePart = value.slice(indexPointer);
  const lastCharInValuePrefix = res[res.length - 1];
  if (restValuePart.length === 0 && value !== '') {
    if (!lastCharInValuePrefix) {
      res = pattern;
    } else {
      res = pattern.slice(0, pattern.indexOf(lastCharInValuePrefix) + 1);
    }
  }

  if (restValuePart.length > 0) {
    res = pattern;
  }

  // rest part of number logic block

  const restPhoneNumberPart = restValuePart
    .split('')
    .filter(char => /^[0-9]$/.test(char));

  const restPhoneNumberPartFormatted: string[] = [];

  restPhoneNumberPart.slice(0, 9).forEach((char, index) => {
    if (index === 2) {
      restPhoneNumberPartFormatted.push(')', ' ', char);
      return;
    }
    if (index === 5 || index === 7) {
      restPhoneNumberPartFormatted.push('-', char);
      return;
    }
    restPhoneNumberPartFormatted.push(char);
  });

  return res + restPhoneNumberPartFormatted.join('');
};
