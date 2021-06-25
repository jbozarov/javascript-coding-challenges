/* You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

Example

sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
*/

function sortArray(array) {
  let odds = array.filter(v => v>0 && v%2 !== 0).sort((a, b) => a-b); 
	for ( let i = 0; i<array.length; i++ ) {
		if (array[i]%2 !==0 ){
			array.splice(i, 1, odds[0])
			odds.shift(); 
		}
	}
	return array; 
}
