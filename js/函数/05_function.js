/*
function code(x){
	switch(x){
		case 1:
	return ('等待付款');
        case 2:
	return ('等待发货');
       case 3:
	return ('运输中');
      default:
    return ('无法追踪');
	}
}
console.log(code());
*/
function year(y){
	if(y%4==0 && y%100!==0 || y%400==0){
		return true;
	}
		return false;
}
 console.log(year(2020));
 //如果是闰年，则打印366，否则365
 if(year(2018)){
 	console.log(366);
 }else{
 	console.log(365);
 }
