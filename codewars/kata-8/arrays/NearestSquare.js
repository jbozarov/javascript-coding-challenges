// Find nearest square number (neareest to n); 

function nearestSq(n){
  var i=n; 
  while( Math.sqrt(i) !== Number.parseInt(Math.sqrt(i))){
    i++; 
  }

  var a=n;
  while ( Math.sqrt(a) !== Number.parseInt(Math.sqrt(a))){
    a--; 
  }

  if (n-a>i-n){
    return i; 
  }
  else return a; 
}
