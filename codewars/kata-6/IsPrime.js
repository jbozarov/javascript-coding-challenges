
// This is execution time out way, so when we use loop it is gonna take more time 

function isPrime(num) {
   if (num<2) return false; 
   else if ( num === 2 ) return true; 
   for ( let i = num-1; i>2; i-- ) {
      if (num%i === 0 ) {
         return false; 
      }
   }
   return true; 
}


/* correct way

Let's say m = sqrt(n) then m × m = n. Now if n is not a prime then n can be written as n = a × b, so m × m = a × b. 
Notice that m is a real number whereas n, a and b are natural numbers.

Now there can be 3 cases:

a > m ⇒ b < m
a = m ⇒ b = m
a < m ⇒ b > m
In all 3 cases, min(a, b) ≤ m. Hence if we search till m, we are bound to find at least one factor of n, 
which is enough to show that n is not prime.
*/




function isPrime(num) {
  if (num < 2) return false;
  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; ++i) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
