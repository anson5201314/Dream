/*
console.log(1);
console.info(2)
console.warn(3);
console.error(4)

//


//检测程序的运行时间
//let同一级作用域下。不允许多次声明
console.time('while');
let i=1;
let sum=0;
while(i<=100){
	sum+=i;
	i++;
}
console.timeEnd('while');
*/
//do-while


console.time('while');

let i=1;
let sum=0;
do{
	sum+=i
		i++;
}while(i<=100){
	
}	
console.timeEnd('while');



console.time('while');
for(let i=1;i<=100000;i++){
	sum+=i;
}
console.timeEnd('while');
