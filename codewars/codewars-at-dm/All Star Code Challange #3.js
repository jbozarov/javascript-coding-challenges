/* Create a function, called removeVowels (or remove_vowels), that takes a string argument and returns that same 
string with all vowels removed (vowels are "a", "e", "i", "o", "u").

removeVowels("drake") // => "drk"
removeVowels("aeiou") // => "" */ 


var removeVowels = function (str){
	var arr = str.split(''); 
	return arr.filter(v=>v!=='a' && v!=='e'&& v!=='i'&& v!=='o'&& v!=='u').join('')
}
