export const reverseString = (stringToCheck: string) => {
  const formattedStringInLowerCase = stringToCheck.toLowerCase();
  let reversedString = '';

  for (let i = formattedStringInLowerCase.length - 1; i >= 0; i--) {
    reversedString += formattedStringInLowerCase[i];
  }

  return reversedString === formattedStringInLowerCase;
};
