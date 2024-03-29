Description:
What's a reversible prime? That is: A prime, reverse all the digits, get a new number. If the new number is also a 
prime, then it is a reversible prime.
We can get a sequence of reversible prime:
 n(start from 0)  --> 0 1 2 3 4  5  6  7  8  .....
 reversible prime --> 2 3 5 7 11 13 17 31 37 .....
Task
Complete function reversiblePrime. Function accept argument n(a integer, 0 <= n <= 10000). Returns the n-th reversible prime.

Some examples:
reversiblePrime(0) === 2
reversiblePrime(1) === 3
reversiblePrime(5) === 13
reversiblePrime(10) === 73
reversiblePrime(20) === 167
reversiblePrime(100) === 1669 





function reversiblePrime(n){
	let maxNum = 1000000; 
	var arr = []; 

	for (var i=2; i<=maxNum; i++){
		var revI = Number(i.toString().split('').reverse().join(''));//2		 
    function isPrime(i){
			var array = []; 
			for(var k=1; k<=i; k++){
				if (i%k==0){
					array.push(k);   
				}
			}
			if (array.length==2) return array[1]; 
			else return 0; 
		}	
		
		if (isPrime(i)==i && isPrime(revI)==revI) {
		arr.push(isPrime(i)); 
	}
	} 
	return arr.filter((a)=>a>=1)[n]; 
}
