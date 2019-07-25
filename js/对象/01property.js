/*
var person={
	name:'tom',
		sex:'男'

};
//检测属性是否存在
person.age='18';
console.log(person.age===undefined);
//预定义方法,JS提供的
console.log(person.hasOwnProperty('age'));
//
console.log('age' in person);
*/



var phone={
	brand:'vivo',
		color:'red',
	say:function(){
		//判断价格属性是否存在，如果不存在，则添加4999
		//this.price===undefined)
			if(!this.hasOwnProperty('price')){
				this.price=4999;
		}
		return '手机品牌为'+this.brand+',颜色为'+this.color+',价格为'+this.price;
	}
	
}

console.log(phone.say());