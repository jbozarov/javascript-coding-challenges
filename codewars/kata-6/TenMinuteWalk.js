/* You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to 
an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a 
Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings 
representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block in a direction and 
you know it takes you one minute to traverse one city block, so create a function that will return true if the walk 
the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return 
you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction 
letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
*/


function isValidWalk (arr) {
   if (arr.length !== 10) return false; 
   var count = {}; 
   arr.forEach(val => {
      count[val] = (count[val] || 0) + 1; 
   })
   var l = Object.keys(count).length; 
   var k = Object.keys(count).sort(); 
   console.log(count)
   console.log(k.includes('ed'))

   if (l === 3 || l === 1 ) {
      return false; 
   } 
   else if ( l===2 && (k === ['n', 'w'] || k === ['e', 'n'] || k === ['s', 'w'] || k === ['e', 's'])) {
      console.log('line 18')
      return false; 
   }
   else if ( k.includes('e') && l === 2 && count.e === count.w ) {
      return true; 
   }
   else if ( k.includes('n') && l === 2 && count.n === count.s ) {
      return true; 
   }
   else if ( l === 4 && count.n === count.s && count.e === count.w ) {
      return true; 
   }
   else return false; 
}
