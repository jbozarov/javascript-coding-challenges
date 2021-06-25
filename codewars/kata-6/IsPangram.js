/* A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick 
brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/ 

function isPangram(str){
	let abc = 'abcdefghijklmnopqrstuvwxyz'; 
  let obj = {}; 
	let arr = str.toLowerCase().split('').filter(v => abc.includes(v))
	arr.forEach(function(i){
		obj[i] = ( obj[i] || 0 ) + 1; 
	}); 
	return Object.keys(obj).length === 26; 
}0
