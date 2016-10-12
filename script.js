
var projectEulerone = function(maxValue) {
	var total = 0;
	for (var i = 1; i < maxValue; i++) {
		if  (((i % 3) === 0) || ((i % 5) ===0))	{
		total += i;	
		}
	}
console.log(total)
};

projectEulerone(1000)

