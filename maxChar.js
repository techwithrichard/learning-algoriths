

// function maxChar(str){
//     // create an object [a=2, b=4, c=1, k=v]
//     const charMap = {}
//     let max = 0
//     let maxChar = ' '

//     for(let char of str){
//         if(charMap[char]){
//             charMap[char] += 1
//         }else{
//             charMap[char] = 1
//         }
//     }
//     // Convert object to an array
//     let charArray = Object.entries(charMap)
//     for (const [key, value] of charArray){
//         // console.log({key,value})
//         if(value>max){
//             max = value
//             maxChar = key
//         }

//     }


//     // return charMap
//     return maxChar
// }

// console.log(maxChar("richard"))

function maxChar(str){
    const charMap =  {}
    let max = 0
    let maxCharacter = ''

    for (let char of str){
        if(charMap[char]){
            charMap[char] += 1
        }else{
            charMap[char] = 1
        } 
    }
    for (let key in charMap){
        if(charMap[key] > max){
            max = charMap[key] 
            maxCharacter = key
        }
    }

    return maxCharacter
}


console.log(maxChar("richard"))