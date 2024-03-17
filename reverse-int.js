// --directions
// Given an integer, return an integer that is the revers
// orderig of the numbers
// maintain the sign

function reverseInt(n){
    const reversed = n.toString().split("").reverse().join("")
    return parseInt(reversed) *Math.sign(n)
}
console.log(reverseInt(-9876))