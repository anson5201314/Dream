
//for in 
//关联数组
var person=[];
person['eid']=1;
person['name']='alis';
person['age']='18';

for(var key in person){
	console.log(key,person[key]);
}
//创建数组，包含若干城市名称，使用for in 遍历数组，打印机每个元素

var city=[
{id:1,name:'深圳'},{id:2,name:'广州'}

];
for (var key in city)
{
	console.log(key,city[key]);
}

//练习，创建数组，包含若干个成绩，遍历数组获取每个成绩，计算总分
//使用for循环遍历

var score=[91,85,90,78];

for(var i=0,sum=0;i<score.length;i++){
	sum+=score[i];

}
console.log(sum);

var name=['king','sara','mandy','king'];
for (var i=0,sum=0;i<name.length;i++){
	if(name[i]==='king'){
		sum++;
	}

}console.log(sum);



//练习：创建数组，包含多个数字，查找最大数值

var arr=[10,5,20,65];
//声明变量，保存最大值，默认把第一个元素作为最大值
var max=arr[0];
//使用max和第二个元素以后的所有元素进行比较
for(var i=1;i<arr.length;i++){
	//arr[i] 
	if(max<arr[i]){
		//如果max小于任意一个元素，则把该元素放入到max中
		max=arr[i];
	}
}
console.log(max);




function avg(arr){
	var arr=[10,5,20,65];
	
	for(var i=0,sum=0;i<arr.length;i++){
	sum+=arr[i];
	
	
	}
return sum/arr.length;
}
console.log(avg(arr));