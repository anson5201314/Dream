//var arr=[10,20,30];
//把数组转字符串
//console.log(arr.toString());
//按照指定的字符把数组元素分割为字符串
//console.log(arr.join(' '));
/*
var arr1=['tom','john','sara'];
var arr2=['lisa','manry','mandy','evra'];
//拼接多个数组
//console.log(arr1.concat(arr2));
var course=['mysql','js','nodejs','html','ajax','css','bootstrap'];
//截取数组中的元素
//console.log(course.slice(2,3));
console.log(course.slice(-3,-1));


var num=['a','b','c','d','e','f','g'];
num1=num.slice(2,4);   //截取
num2=num.slice(-2,-1);  //截取
num3=num.slice(1,2);    //截取
console.log(num3.concat(num2,num1));

var course=['mysql','js','nodejs','html','ajax','css','bootstrap'];
//删除数组中的元素
//作用：删除数组元素
//参数:参数1开始下标，参数2是删除的长度也就是个数,参数3是补充后的元素
//返回值：返回删除后的元素，个数为数组
console.log(course.splice(1,2,'123','56'));
console.log(course);
*/

//要求将数组中的0项去掉，将不为0的值存入一个新的数组，生成新的数组
var arr = [4, 0, 7, 9, 0, 0, 2, 6, 0, 3, 1, 0];
arr1=arr.splice(0,1);
arr2=arr.slice(1,2);
arr3=arr.slice(5,7);
arr4=arr.slice(-3,-1);
console.log(arr2.concat(arr3,arr4));
//console.log(arr4);
