/*
var person={
    name:'tom',
	 sex:'男',
	 age:'18'
};
//遍历，访问每一个属性
for(var key in person){
	//key 代表所有的属性名
console.log(key,person[key]);
	
}
*/

var cored={
	chinese:82,
		math:95,
		english:80,
		sports:90
};
	var sum=0;
	for(var key in cored){
		//console.log(key,cored[key]);
		//把每一个属性值加到sum中
		sum+=cored[key];
	}
	console.log(sum);