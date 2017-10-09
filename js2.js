var arr = ['1','2','1','3','5','2'];
function repeats(arr){
	var arrs = [];
	for(var i=0;i<arr.length;i++){
		for(var j=i+1;j<arr.length;j++){
			if (arr[i] == arr[j]) {
				j = ++i;
			}
		}
		arrs.push(arr[i])
	}
	return arrs;
}
console.log(repeats(arr));