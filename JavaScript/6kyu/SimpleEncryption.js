function encrypt(text, n) {
newArray = [];
oldArray = [];

  if (n < 1) {
    return text;
  } else if (text =='') {
    return '';
  }  else if (text == null) {
    return null;
  }
  else {
    for (let i = 0; i < n; i++) {
      for (let x = 0; x < text.length; x++) {
        if (x % 2 === 1) {
          newArray.push(text[x])
        } else {
          oldArray.push(text[x]);
        }
      }
      text = newArray.concat(oldArray);
      newArray = [];
      oldArray = [];
    }
    
    return text.reduce((sum, num) => sum + num);
  }
}

function decrypt(encryptedText, n) {
  if (n < 1) {
    return encryptedText;
  } else if (encryptedText == '') {
    return '';
  } else if (encryptedText == null) {
    return null;
  } else {
    for (let i = 0; i < n; i++) {
      let firstArray = encryptedText.split("").splice(0, Math.floor(encryptedText.length/2));
      let secondArray = encryptedText.split("").splice(Math.floor(encryptedText.length/2), encryptedText.length);
      encryptedText = [];
      for (let x = 0; ; x++) {
        if (x < secondArray.length) {
          encryptedText += secondArray[x]
        } 
        if (x < firstArray.length) {
          encryptedText += firstArray[x]
        } 
        if (x >= secondArray.length && x >= firstArray.length) {
          break;
        }
      }
    }
  }
  return encryptedText;
}