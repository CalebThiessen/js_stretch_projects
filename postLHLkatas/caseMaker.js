const makeCase = function (input, style) {
  if (Array.isArray(style)) {
      style.forEach(type => {
        if (type === "camel") {
            
            joinedArray = Array.from(input);
            UCArray = [];
            let i = 0;
            while (i < joinedArray.length) {
              if (joinedArray[i] === " ") {
                UCArray.push(joinedArray[i + 1].toUpperCase());
                i += 2;
              } else {
                UCArray.push(joinedArray[i]);
                ++i;
              }
            }
            input = UCArray.join("");
            return input
          }
        
          if (type === "pascal") {
            joinedArray = Array.from(input);
            UCArray = [];
            let i = 0;
            while (i < joinedArray.length) {
              if (i === 0) {
                UCArray.push(joinedArray[i].toUpperCase());
                ++i;
              } else if (joinedArray[i] === " ") {
                UCArray.push(joinedArray[i + 1].toUpperCase());
                i += 2;
              } else {
                UCArray.push(joinedArray[i]);
                ++i;
              }
            }
            input = UCArray.join("");
            return input
          }
        
          if (type === "snake") {
           
            joinedArray = Array.from(input);
            UCArray = [];
            let i = 0;
            while (i < joinedArray.length) {
                if (joinedArray[i] === " ") {
                UCArray.push("_");
                ++i;
              } else {
                UCArray.push(joinedArray[i]);
                ++i;
              }
            }
            input = UCArray.join("");
            
            
          }
        
          if (type === "kebab") {
            joinedArray = Array.from(input);
            UCArray = [];
            let i = 0;
            while (i < joinedArray.length) {
                if (joinedArray[i] === " ") {
                UCArray.push("-");
                ++i;
              } else {
                UCArray.push(joinedArray[i]);
                ++i;
              }
            }
            input = UCArray.join("");
            return input
          }
        
          if (type === "title") {
            joinedArray = Array.from(input);
            UCArray = [];
            let i = 0;
            while (i < joinedArray.length) {
              if (i === 0) {
                UCArray.push(joinedArray[i].toUpperCase());
                ++i;
              } else if (joinedArray[i] === " ") {
                UCArray.push(" " + joinedArray[i + 1].toUpperCase());
                i += 2;
              } else {
                UCArray.push(joinedArray[i]);
                ++i;
              }
            }
            input = UCArray.join("");
            return input
          }
        
          if (type === "vowel") {
            joinedArray = Array.from(input);
            UCArray = [];
            let i = 0;
            while (i < joinedArray.length) {
             if (
                (joinedArray[i] === "a" ) ||
                (joinedArray[i] === "e" ) ||
                (joinedArray[i] === "i" ) ||
                (joinedArray[i] === "o" ) ||
                (joinedArray[i] === "u" )
                )
             {
                UCArray.push(joinedArray[i].toUpperCase());
                ++i;
              } else {
                UCArray.push(joinedArray[i]);
                ++i;
              }
            }
            input = UCArray.join("");
            return input
          }
        
          if (type === "consonant") {
            
            joinedArray = Array.from(input);
            UCArray = [];
            let i = 0;
            while (i < joinedArray.length) {
             if (
                (joinedArray[i] === "a" ) ||
                (joinedArray[i] === "e" ) ||
                (joinedArray[i] === "i" ) ||
                (joinedArray[i] === "o" ) ||
                (joinedArray[i] === "u" )
                )
             {
                UCArray.push(joinedArray[i]);
                ++i;
              } else {
                UCArray.push(joinedArray[i].toUpperCase());
                ++i;
              }
            }
            input = UCArray.join("");
           
          }
      })
      return input
  }
  
    if (style === "camel") {
    joinedArray = Array.from(input);
    UCArray = [];
    let i = 0;
    while (i < joinedArray.length) {
      if (joinedArray[i] === " ") {
        UCArray.push(joinedArray[i + 1].toUpperCase());
        i += 2;
      } else {
        UCArray.push(joinedArray[i]);
        ++i;
      }
    }
    input = UCArray.join("");
    return input
  }

  if (style === "pascal") {
    joinedArray = Array.from(input);
    UCArray = [];
    let i = 0;
    while (i < joinedArray.length) {
      if (i === 0) {
        UCArray.push(joinedArray[i].toUpperCase());
        ++i;
      } else if (joinedArray[i] === " ") {
        UCArray.push(joinedArray[i + 1].toUpperCase());
        i += 2;
      } else {
        UCArray.push(joinedArray[i]);
        ++i;
      }
    }
    input = UCArray.join("");
    return input
  }

  if (style === "snake") {
    joinedArray = Array.from(input);
    UCArray = [];
    let i = 0;
    while (i < joinedArray.length) {
        if (joinedArray[i] === " ") {
        UCArray.push("_");
        ++i;
      } else {
        UCArray.push(joinedArray[i]);
        ++i;
      }
    }
    input = UCArray.join("");
    return input
  }

  if (style === "kebab") {
    joinedArray = Array.from(input);
    UCArray = [];
    let i = 0;
    while (i < joinedArray.length) {
        if (joinedArray[i] === " ") {
        UCArray.push("-");
        ++i;
      } else {
        UCArray.push(joinedArray[i]);
        ++i;
      }
    }
    input = UCArray.join("");
    return input
  }

  if (style === "title") {
    joinedArray = Array.from(input);
    UCArray = [];
    let i = 0;
    while (i < joinedArray.length) {
      if (i === 0) {
        UCArray.push(joinedArray[i].toUpperCase());
        ++i;
      } else if (joinedArray[i] === " ") {
        UCArray.push(" " + joinedArray[i + 1].toUpperCase());
        i += 2;
      } else {
        UCArray.push(joinedArray[i]);
        ++i;
      }
    }
    input = UCArray.join("");
    return input
  }

  if (style === "vowel") {
    joinedArray = Array.from(input);
    UCArray = [];
    let i = 0;
    while (i < joinedArray.length) {
     if (
        (joinedArray[i] === "a" ) ||
        (joinedArray[i] === "e" ) ||
        (joinedArray[i] === "i" ) ||
        (joinedArray[i] === "o" ) ||
        (joinedArray[i] === "u" )
        )
     {
        UCArray.push(joinedArray[i].toUpperCase());
        ++i;
      } else {
        UCArray.push(joinedArray[i]);
        ++i;
      }
    }
    input = UCArray.join("");
    return input
  }

  if (style === "consonant") {
    joinedArray = Array.from(input);
    UCArray = [];
    let i = 0;
    while (i < joinedArray.length) {
     if (
        (joinedArray[i] === "a" ) ||
        (joinedArray[i] === "e" ) ||
        (joinedArray[i] === "i" ) ||
        (joinedArray[i] === "o" ) ||
        (joinedArray[i] === "u" )
        )
     {
        UCArray.push(joinedArray[i]);
        ++i;
      } else {
        UCArray.push(joinedArray[i].toUpperCase());
        ++i;
      }
    }
    input = UCArray.join("");
    return input
  }
};
  
  // console.log(makeCase("this is a string", "camel"));
  // console.log(makeCase("this is a string", "pascal"));
  // console.log(makeCase("this is a string", "snake"));
  // console.log(makeCase("this is a string", "kebab"));
  // console.log(makeCase("this is a string", "title"));
  // console.log(makeCase("this is a string", "vowel"));
  // console.log(makeCase("this is a string", "consonant"));
  console.log(makeCase("this is a string", ["kebab", "pascal"]));