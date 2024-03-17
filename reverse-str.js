// reverse a string
// create a function->str
// declare an empty variable to hold every reversed char
// loop through the str->from the first to the last char
// reverse
// return reversed str(variable)

function reverseStr(str){
    let reversed=""

    for (let i=0;i<str.length;i++){
        reversed = str[i] + reversed
    }
    return reversed

}

console.log(reverseStr("richard"))