

function longestConsec(arr, k) {
  if ( k<1 || k>arr.length ) return ""
	let sorted = arr.slice().sort((a, b) => b.length - a.length); 
	let sliced = sorted.slice(0, k); 
	let result = []; 
	for ( let i = 0; i < arr.length; i++ ) {
		if ( sliced.includes(arr[i]) ){
			result.push(arr[i])
		}
	}
	return result.join('')
}
