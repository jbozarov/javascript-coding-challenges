/* You are given a number sequence(an array) that contains some positive integer and zero.
 [3,2,1,0,5,6,4,0,1,5,3,0,4,2,8,0]
It can be split to some zero-terminated sub sequence, such as [3,2,1,0],[5,6,4,0]...

Your task is: First, sort each sub sequence according to the ascending order(don't sort the zero, it always at the end); 
Second, sort all sub sequence according to their sum value(ascending order too).

Arguments:

sequence: The number sequence.
Results & Note:

The result is the sorted number sequence.
If some sub sequences have the same sum value, sort them according to their original order.
Some Examples
sortSequence([3,2,1,0,5,6,4,0,1,5,3,0,4,2,8,0]) should return
[1,2,3,0,1,3,5,0,2,4,8,0,4,5,6,0]

sortSequence([3,2,1,0,5,6,4,0,1,5,3,0,2,2,2,0]) should return
[1,2,3,0,2,2,2,0,1,3,5,0,4,5,6,0]

sortSequence([2,2,2,0,5,6,4,0,1,5,3,0,3,2,1,0]) should return
[2,2,2,0,1,2,3,0,1,3,5,0,4,5,6,0]
*/ 


function sortSequence(arr){
    var ind = [0]; 
		for (var i=0; i<arr.length; i++){
			if (arr[i]===0){
				ind.push(i); 
			}
		}
	 var count=[]; 
   for (var i=1; i<ind.length; i++){
		 count.push(arr.slice(ind[i-1], ind[i])); 
	 }
	 count[0].push(0); 
	 
	 count.map(function(a){
		 return a.sort((a,b)=>a-b); 
	 })
	 count.sort(function(a, b){
		 return a.reduce((x,y)=>x+y)-b.reduce((x,y)=>x+y)
	 })
	 count.map(a=>a.shift()); 
	 count.map(a=>a.push(0)); 
	 return count.reduce((a, b)=>a.concat(b)); 
}
