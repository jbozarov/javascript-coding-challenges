/* Your task is to sum the differences between consecutive pairs in the array in descending order.
For example: sumOfDifferences([1, 2, 10] Returns 9
Descending order: [10, 2, 1]
Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
If the array is empty or the array has only one element the result should be 0. */ 



function sumOfDifferences(arr) {
	var sor = arr.sort((a, b) =>b-a); 
	var result = 0; 
	if (arr.length<=1) return 0; 
	for (var i=0; i<sor.length-1; i++){
		result += sor[i]-sor[i+1]; 
	}
	return result;  
}
