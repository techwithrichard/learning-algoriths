// a palindrome is a string that makes the same word when reversed 
// i.e eye, madam, kayak

function palindrome(str){
    const reversed = str.split("").reverse().join("")
    if(str === reversed){
        return true
    }
    return false;
}

console.log(palindrome("richard"))

