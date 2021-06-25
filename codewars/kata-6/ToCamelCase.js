/* Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized (known as 
Upper Camel Case, also often referred to as Pascal case).

Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
*/





function toCamelCase(str){
	if (str.length<1) return ''; 
	let under; 
	if (str.includes('_')){
		under = str.split('_') 
	}
	else if (str.includes('-')){
		under = str.split('-')
		}
let result = under.map(function(e){
		return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase(); 
	})
	.join('')

  if (str.charAt(0) === str.charAt(0).toLowerCase()){
		return result.replace(result.charAt(0), result.charAt(0).toLowerCase())
	}
	else return result; 
}
