
//练习：1、将一句英文每个单词的首字母大写，其余小写
//hOw arE yOu   -How Are You
var arr=['hOw','arE','yOu'];
var str=arr.join('-')
for(i=1;i<str.length;i++){
	arr1=str[i].substring(0,1).toUpperCase()+str[i].substring(1).toLowerCase().split('-')

}console.log(arr1[]);
//var first=str.substring(0,1).toUpperCase();
//var other=str.substring(1).toLowerCase();




//2 创建数组，包含0~9，a-z随机取4个字符，放入到一个新数组中

//var arr=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//var str=random();
//console.log(str);




