

function sc (watermelon){

	var first = watermelon.slice(0, 4).map(function(a){
		var fir =  a.slice(0, 4)
		return fir
	})
	var totalFirst = first.map(a=>a.reduce((a, b)=>a+b)); 	

	var second = watermelon.slice(0, 4).map(function(a){
		var sec = a.slice(4)
		return sec
	})
	var totalSecond = second.map(a=>a.reduce((x, y)=>x+y)); 

		var third = watermelon.slice(4).map(function(a){
		var thir =  a.slice(0, 4)
		return thir
	})
	var totalThird = third.map(a=>a.reduce((a, b)=>a+b)); 

		var fourth = watermelon.slice(4).map(function(a){
		var four = a.slice(4)
		return four
	})
	var totalFour = fourth.map(a=>a.reduce((x, y)=>x+y)); 

	var result = [totalFirst, totalSecond, totalThird, totalFour].map(function(a){
		return a.reduce((x, y)=>x+y); 
	})
	return result.filter(a=>a>5).reduce((x, y)=>x+y, 0); 
}
