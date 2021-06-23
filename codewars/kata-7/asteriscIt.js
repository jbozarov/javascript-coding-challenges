You are given a function that should insert an asterisk (*) between every pair of even digits in the given input, 
and return it as a string. If the input is a sequence, concat the elements first as a string.

Input
The input can be an integer, a string of digits or a sequence containing integers only.

Output
Return a string.

Examples
5312708     -->  "531270*8"
"0000"      -->  "0*0*0*0"
[1, 4, 64]  -->  "14*6*4"





function asteriscIt(n) { 
	let arr = []
	if (Array.isArray(n)){
		console.log('true')
		arr = n.join('').toString().split('') 
	}
	else {
	arr = n.toString().split('').map(val => Number(val)); 
	}
	for (let i = 0; i<arr.length-1; i++ ) {
		if (arr[i]%2 === 0 && arr[i+1]%2 === 0 ){
				arr.splice(i+1, 0, '*')
			}
		}
	return arr.join(''); 
};
