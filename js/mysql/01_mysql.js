//引入MySQL模块
const mysql=require('mysql');
//建立连接
//创建连接对象
var connection=mysql.createConnection({
	host:'127.0.0.1',
    port:3306,
		user:'root',
		password:'',
		database:'tedu'  //连接后使用的数据库
	
});
//执行连接
connection.connect();
//查询所有员工数据
//执行sql语句
/*
connection.query('SELECT * FROM emp',function(err,result){
	//err 可能产生的错误
	//result SQL语句的执行结果
	if(err) throw err;
	console.log(result);
});

//插入数据  往员工表插入一条数据
connection.query(`INSERT INTO emp VALUES(?,?,?,?,?,?)`,[null,'karl',0,'199-8-2',7500,20],
	function(err,result){
	if(err) throw err;
	console.log(result);
});

 var person={
	eid:null,
		ename:'davi',
		sex:1,
        birthday:'199-6-20',
		salary:7923,
		deptId:10
 }
	//插入对象形式的数据
	connection.query('INSERT INTO emp SET ?',[person],function(err,result){
		if(err) throw err;
		console.log(result);
	});

//修改编号为5的数据的性别和生日
connection.query('UPDATE emp SET sex=?,birthday=? WHERE eid=?',[1,'1999-9-9',5],function(err,result){
	if(err) throw err;
	console.log(result);
})
*/
//删除编号为10的数据
connection.query('DELETE FROM emp WHERE eid=?',[18],function(err,result){
	if(err) throw err;
	console.log(result);
});

//关闭连接
connection.end();