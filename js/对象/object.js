//使用对象字面量
var laptop={
	title:'小米',
	price:5545,
	size:14.1,
    'made in':'中国'
};
console.log(laptop);


var x={
	  id:1,
	name:'anson',
     sex:'man',
birthday:1990,
		  salary:6000,
		  dept:'hr'
}
console.log(x);

var phone={
	colour:'red',
		brand:'vivo',
		size:'7寸',
		memory:'32G',
	   'made in':'china'
}
//修改size的值
//console.log(phone.size);
phone.memory='125G';
phone['made in']='japan';
//phone['memory']=64;
//访问不存在的属性
//console.log(phone.cpu);
//添加不存在的属性

phone.cpu='麒麟750';
console.log(phone);


var book={
	id:1,
		title:'红军旅程',
		name:'中国文学社出版',
		pric:65,
		date:'1990-10-1',

}
book.pric=80;
book.name='上海文学社';
book.size='4寸';
console.log(book.name);
console.log(book);