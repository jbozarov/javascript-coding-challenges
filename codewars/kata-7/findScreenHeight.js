 function findScreenHeight(width, ratio) {
   var arr = ratio.split(':')
   var h = width/Number(arr[0])*Number(arr[1]); 
   return `${width}x${h}`
}
