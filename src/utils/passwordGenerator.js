import charsets from "../Constants/charsets";

export const generatePassword = (
  length,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSpecialChars
) => {
  const selectedCharsets = [];
  if (includeUppercase) selectedCharsets.push(charsets.uppercaseCharset);
  if (includeLowercase) selectedCharsets.push(charsets.lowercaseCharset);
  if (includeNumbers) selectedCharsets.push(charsets.numberCharset);
  if (includeSpecialChars) selectedCharsets.push(charsets.specialCharset);

  let result = "";
  for (const charset of selectedCharsets) {
    const randomCharacter = charset.charAt(
      Math.floor(Math.random() * charset.length)
    );
    result += randomCharacter;
  }
  for (let i = result.length; i < length; i++) {
    const randomCharset =
      selectedCharsets[Math.floor(Math.random() * selectedCharsets.length)];
    const randomCharacter = randomCharset.charAt(
      Math.floor(Math.random() * randomCharset.length)
    );
    result += randomCharacter;
  }
  return result;
};
