const squareCode = function (message) {
  charString = "";
  charSquare = "";
  preresult = "";
  result = "";
  let i = 0;
  while (i < message.length) {
    if (message[i] === " ") {
      ++i;
    }
    charString += message[i];
    ++i;
  }
  let j = 0;
  while (j < charString.length) {
    if (j > 0 && j % Math.ceil(Math.sqrt(charString.length)) === 0) {
      charSquare += " ";
    }
    charSquare += charString[j];
    ++j;
  }
  charArray = charSquare.split(" ");

  let row = 0;
  let col = 0;

  while (col <= charArray.length) {
    row = 0;
    while (row < charArray.length) {
      if (charArray[row][col]) {
        result += charArray[row][col];
      }
      ++row;
    }
    result += " ";
    ++col;
  }

  return result;
};

  console.log(squareCode("feed the dog"));
  console.log(squareCode("have a nice day"));
  console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
