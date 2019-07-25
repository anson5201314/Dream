//引入ur1模块

const url=require('url');
/*
var str='http://www.codeboy.com:80/detail.html?lid:5&pname=dell';
//解析为对象
var obj=url.parse(str);
//console.log(obj);
//把对象格式化为url
var obj2={
	protocol:'https',   //协议
		hostname:'www.codeboy.com',    //主机名
		port:'80',     //端口
		pathname:'/detail.html',    //文件路径
		query:{  //查询字符串
		lid:5,
			pname:'dell'
		}
}
console.log(url.format(obj2));
*/
const querystring=require('querystring');
var str2=' https://www.tmooc.cn:443/course.html?cid=18&cname=javascript';
//把url解析为对象
var obj3=url.parse(str2);
//获取的查询的字符串
//console.log(obj3)
var str4=obj3.query;
var obj4=querystring.parse(str4);
console.log(obj4.cid,obj4.cname)