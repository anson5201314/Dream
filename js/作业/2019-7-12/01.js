/*
//要求将数组中的0项去掉，将不为0的值存入一个新的数组，生成新的数组
var arr = [4, 0, 7, 9, 0, 0, 2, 6, 0, 3, 1, 0];
arr1=arr.splice(0,1);
arr2=arr.slice(1,2);
arr3=arr.slice(5,7);
arr4=arr.slice(-3,-1);
console.log(arr2.concat(arr3,arr4));
//console.log(arr4);


arr=[4,0,7,9,0,0,2,6,0,3,1,0];
var arr1=[];
var j=0;
for(var i=0;i<arr.length;i++){
	if(arr[i]!==0){
	arr1[j]=arr[i];
	j++;
  }
}
console.log(arr1);

//1、有1、2、3、4个数字，能组成多少个互不相同且无重复数字的三位数？都是多少？


var a,b,c;
var sum=0;
for (i=100;i<=999;i++){
a=parseInt(i/100);
b=parseInt(i/10%10);
c=parseInt(i%10);
  if((a==1 || a==2 || a==3 || a==4) && (b==1 || b==2 || b==3 || b==4) && (c==1 || c==2 || c==3 || c==4)){
	if(a!=b && b!=c && a!=c){
		//不重复的排序
	console.log(i);   
	sum++
	}
}
}
console.log(sum);
*/

	for(var i=1;i<=4;i++){
		for(var j=1;j<=4;j++){
			if(j!=i){
				for(var k=1;k<=4;k++){
					if(k!=i && k!=j){
						console.log(i*100+j*10+k+' ');
					}
				}
			}
		}
	}
