// a palindrome is a string that makes the same word when reversed 
// i.e eye ===true, madam===true, kayak===true, richard===false

function palindrome(str){
    const reversed = str.split("").reverse().join("")
    if(str === reversed){
        return true
    }
    return false;
}

function palindrome2(str){
    const reversed = str.split("").reverse().join("")
    return str === reversed
}

console.log(palindrome("richard"))
console.log(palindrome2("eye"))

