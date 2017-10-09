var arrq = ['1','2','1','3','5','2'];
function repeats1(arr){
	var arr1 = [];
	for(var i=0;i<arr.length;i++){
		if (arr1.indexOf(arr[i]) == -1) {
			arr1.push(arr[i]);
		}
	}
	return arr1;
}
console.log(repeats1(arrq));