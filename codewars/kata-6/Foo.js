/* The range of vision of a digit is its own value. 1 can see one digit to the left and one digit to the right,2 
can see two digits, and so on.

Thus, the loneliness of a digit N is the sum of the digits which it can see.

Given a non-negative integer, your funtion must determine if there's at least one digit 1 in this integer such 
that its loneliness value is minimal.

Example
number = 34315
digit	can see on the left	can see on the right	loneliness
3	-	431	4 + 3 + 1 = 8
4	3	315	3 + 3 + 1 + 5 = 12
3	34	15	3 + 4 + 1 + 5 = 13
1	3	5	3 + 5 = 8
5	3431	-	3 + 4 + 3 + 1 = 11

*/ 


function foo (n) {
	let obj = {}; 
	let arr = n.toString().split('').map(v => Number(v)); 
	for ( let i = 0; i < arr.length; i++ ) {
		let temp = [...arr.slice(i+1, )]
		console.log(arr[i], temp)
	}
	return arr; 
}


function loneliest (n) {
	let obj = {}; 
	let arr = n.toString().split('').map(v => Number(v)); 
	for ( let i = 0; i < arr.length; i++ ) {
		let temp = [...arr.slice( i-arr[i]>0 ? i-arr[i] : 0, i ), ...arr.slice(i+1, i+arr[i]+1 )]
		obj[arr[i]] = temp.reduce((a, b) => a + b, 0); 
	}
	let min = Math.min(...Object.values(obj))
	let keyMin = Math.min(...arr)
	return obj[keyMin] === min; 
}
