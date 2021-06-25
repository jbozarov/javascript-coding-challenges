// numbers are array; 

function squareSum(numbers){
  return numbers.length < 1 ? 0 : numbers.map((a) =>a**2).reduce((a, b) => a+b);
}
