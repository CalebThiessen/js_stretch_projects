const urlDecode = function(text) {
    let result = {};
    let textString = ""
    
    let i = 0
    while (i < text.length) {
        if (text[i] === "=") {
            textString += " = "
            ++i
        }  else if (text[i] === "&") {
            textString += " & "
            ++i
        }
        textString += text[i]
        ++i
    }
   let inputArray = textString.split(" ")
  let k = 0
  while (k < inputArray.length) {
     
    inputArray[k] = inputArray[k].replace(/%20/g, " ")
      ++k
  }
   let j = 0
   while (j < inputArray.length) {
    
    
    if (inputArray[j] === "="){
           result[inputArray[j - 1]] = inputArray[j + 1],
           
           ++j
       } else {++j}
   }
return result
  };
  
   console.log(urlDecode("duck=rubber"));
   console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
   console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
   console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

