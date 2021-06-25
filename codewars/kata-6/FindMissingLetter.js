/* #Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing 
letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array 
will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"
*/


function findMissingLetter(array){
	let arr = 'abcdefghijklmnopqrstuvwxyz'.split('')
	let sliced = arr.slice(arr.indexOf(array[0].toLowerCase()))
	for ( let i = 0; i<array.length; i++ ) {
		if ( array[i].toLowerCase() !== sliced[i] ) {
			return array[i].toLowerCase() === array[i] ?  sliced[i].toLowerCase() : sliced[i].toUpperCase(); 
		}
	}
}
