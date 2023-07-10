const formatNumber = number => {
  const [integerPart, decimalPart] = number.toString().split('.');
  let formattedString = '';
  let counter = 0;

  for (let i = integerPart.length - 1; i >= 0; i--) {
    if (counter === 3) {
      formattedString = ',' + formattedString;
      counter = 1;
    } else {
      counter++;
    }
    formattedString = integerPart[i] + formattedString;
  }

  if (decimalPart) {
    formattedString += '.' + decimalPart;
  }

  return formattedString;
};

export { formatNumber };