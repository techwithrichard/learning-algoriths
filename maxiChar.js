
function maxChar(str){
    const maxCharArray = {}
    let maxValue = 0
    let maxCharacter = ''

    for(let char of str){
        if(maxCharArray[char]){
            maxCharacter[char] +=1
        }else{
            maxCharArray[char] = 1
        }
    }

    // console.log(maxCharArray)
    for(let key in maxCharArray){
        if(maxCharArray[key] > maxValue){
            maxValue = maxCharArray[key]
            maxCharacter = key
        }

    }
    return maxCharacter
}

console.log(maxChar("eye"))