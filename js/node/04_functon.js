

//一次性定时器
//当间隔时间到了，执行回调函数
/*
var timer=global.setTimeout(function(){
	console.log('aaaaa');
},3000)


//清除

global.clearTimeout(timer);
*/
//周期性定时器
var i=0;
var timer=setInterval(()=>{
	console.log('hello');
	i++;
	if(i==3){
		
 clearInterval(timer);
	}
	
},3000);


//立即执行定时器

//setImmediate/clearImmediate
//process.nextTick