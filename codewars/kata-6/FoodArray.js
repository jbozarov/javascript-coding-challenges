// access the value of the last element of the array and set it to a variable called school.  print the school variable to the console.

const foodArray = [ 'potatoes', 'tamales', 'lemon','strawberries','chocolate', 'pudding', {school : 'TEKcamp'} ];
const adjectiveArray = [ 'salty', 'spicy', 'sour', 'sweet', 'rich','creamy','amazing'];

for ( let i = 0; i<foodArray.length; i++ ) {
	if ( foodArray[i].charAt(foodArray[i].length-1) === 's') {
		console.log(foodArray[i] + ' are ' + adjectiveArray[i])
	}
	else {
		console.log(foodArray[i] + ' is ' + adjectiveArray[i])
	}
}
