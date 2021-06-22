/* Write a function that receives two strings and returns n, where n is equal to the number of characters we should 
shift the first string forward to match the second. The check should be case sensitive.

For instance, take the strings "fatigue" and "tiguefa". In this case, the first string has been rotated 5 characters 
forward to produce the second string, so 5 would be returned.

If the second string isn't a valid rotation of the first string, the method returns -1.
Examples:
"coffee", "eecoff" => 2
"eecoff", "coffee" => 4
"moose", "Moose" => -1
"isn't", "'tisn" => 2
"Esham", "Esham" => 0
"dog", "god" => -1 */ 

function shiftedDiff(first, second){
    let tempString = first; 
    let num  = 0; 
    for (let i = 0; i < first.length; i++ ) {
        if (tempString === second) {
            return num; 
        } else {
            num += 1; 
            tempString = tempString.charAt(tempString.length - 1) + tempString.slice(0, tempString.length - 1);
            continue; 
        }
    }
    if (tempString === second) {
        return num; 
    }
    return -1; 
  }

console.log("result is: ", shiftedDiff("eabcd", "abcde"))