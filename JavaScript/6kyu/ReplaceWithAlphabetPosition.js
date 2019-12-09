function alphabetPosition(text) {

  var myText = text.toLowerCase();
  var newText = "";

  for (var i = 0; i < myText.length; i++) {
    var pos = myText[i].charCodeAt(0);
    if (pos > 96 && pos < 123) {
      newText += (pos-96).toString() + " ";
      
    }
  }
  return newText.trim();
}