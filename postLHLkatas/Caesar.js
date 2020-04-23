encrypt = (string, key) => {
let alph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
"k", "l", "m", "n", "o", "p", "q", "r", "s", 
"t", "u", "v", "w", "x", "y", "z"]
let result = ""
let stringArray = string.split("")
stringArray.forEach(elem => {

    let i = 0
while (i < alph.length) {
    if ((elem === " ") && (i === 0)) {result += " "
    ++i
    
} else if (elem === alph[i]) {
    if (i + key < 0) {result += alph[alph.length + 1 + key]
    } else if (i + key > 25){ result += alph[i + key - 26]
    }else{
    
    
        result += alph[i + key]}
}
++i
}})

return result
 
}

module.exports = { encrypt };