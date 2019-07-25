/*三、对象的题目
				(1)使用三种创建对象的方法：
				创建一个学生对象(student),对象的属性为姓名(sname),
				年龄(sage),性别(ssex),
				introduce函数：将学生的姓名，年龄，性别
				连接起来
				
				(2)使用两种方法分别
				打印出一个学生的年龄、姓名、性别
				var str='';
				for(var i in a){
				str+=a[i];
				}
				console.log(str);
				(3)使用两种方法分别
			修改一个学生的年龄、姓名、性别



/*var student={
	sname:'anna',
	age:18,
	ssex:'女'
}
student.sname='tom';
student.age=22;
student.ssex='男';
console.log(student);

//第二种
var student=new Object();
student.sname='anna';
student.age='18';
student.ssex='女';

console.log(student);


*/
//
var student={
	this.sname:'anne';
	this.age:'18';
	this.ssex:'女';
}
student['sname']='张三'
student['age']='45'
student['ssex']='男'
for(var key in student){
	console.log(key,student[key]);
}

//打印方式1
              var str='';
				for(var i in a){
				str+=a[i];
				}
				console.log(str);


//打印方式2
var student={
	sname:'anna',
	age:18,
	ssex:'女'
  a:function(){
	 console.log(this.sname+this.age+this.ssex);
  }
}
con