//false:  0、NaN、''、undefined、null
var b1=new Boolean(0)
var b2=Boolean(NaN)
console.log(b1,typeof b1)  // false  objiect
console.log(b2,typeof b2)  //false 'boolean'

console.log(Boolean([]))
//隐式转为布尔型
var a=Boolean(!!5);
console.log(a);