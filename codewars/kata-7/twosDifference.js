The objective is to return all pairs of integers from a given collection of integers that have a difference of 2.

The result should be sorted in ascending order.

The input will consist of unique values. The order of the integers in the input collection should not matter.

Examples
[1, 2, 3, 4]      -->  [[1, 3], [2, 4]]
[4, 1, 2, 3]      -->  [[1, 3], [2, 4]]
[1, 23, 3, 4, 7]  -->  [[1, 3]]
[4, 3, 1, 5, 6]   -->  [[1, 3], [3, 5], [4, 6]]



function twosDifference (arr){
   let sorted = arr.sort((a, b) => a-b)
   let result = []; 
   for ( let i=0; i<sorted.length; i++ ) {
      for ( let k = i+1; k<sorted.length; k++ ) {
         if (sorted[i]+2 === sorted[k]){
            result.push([sorted[i], sorted[k]])
         }
      }
   } 
   return result; 
}
