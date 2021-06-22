/ * Given a string of digits, you should replace any digit below 
5 with '0' and any digit 5 and above with '1'. Return the resulting string. */ 

function fakeBin(x){
  var arr = x.split(''); 
  for (var i=0; i<arr.length; i++){
    if (arr[i]<5){
      arr.splice(i, 1, '0')
    }
    else if(arr[i]>=5){
      arr.splice(i, 1, '1'); 
    }
  }
  return arr.join(''); 
}
