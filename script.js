let student = {
	name : "Abdullah"
}

function getKeys(obj){
	let arrObj =[];
	for(key in obj){
		arrObj.push(key)
}
	
	return arrObj;
}
let arr = getKeys(student);
