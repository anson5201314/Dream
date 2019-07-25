var str='china中国梦,China中国,CHINA中国人,china欢迎您';
// 查找China
//console.log(str.search('China'));   //9
//正则表达式写法
//i  -->ignore 忽略大小写
//console.log(str.search(/China/i));  //0
//console.log(str.match(/China/ig))  

//查找并替换
console.log(str.replace(/china/ig,'****'));  //

