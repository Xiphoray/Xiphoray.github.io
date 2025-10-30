function $(v){
			if(typeof v==='function'){
				window.onload=v;
			}else if(typeof v==='string'){
				return document.getElementById(v);
			}else if(typeof v==='object'){
				return v;
			}
}
function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr]:getComputedStyle(obj)[attr];
 	
}
function doMove(obj,attr,dir,target,endFn){
		 	dir=parseInt(getStyle(obj,attr))<target ? dir : -dir;
		 	clearInterval(obj.timer);
		 	obj.timer=setInterval(function(){
		 		var speed=parseInt(getStyle(obj,attr))+dir;
		 		if(speed>target&&dir>0||speed<target&&dir<0 ){
		 			speed=target;//往前跑
		 		}
		 		obj.style[attr]=speed+'px';
		 		if(speed==target){
		 			clearInterval(obj.timer);
		 		 	  endFn&&endFn();
		 		}
		 	},30)
}
function shake(obj,attr,endFn){
  		  if(obj.onOff){
  		  	return;
  		  }
  	    obj.onOff=true;
	 	clearInterval(obj.shake);
	 	var pos=parseInt(getStyle(obj,attr));
		var arr=[];
		var num=0;
		obj.shake=null;
	 	for(var i=10;i>0;i-=2){
			arr.push(i,-i);
		}
	 	arr.push(0);
	 	obj.shake=setInterval(function(){
	 		num=num%(arr.length)
	 		obj.style[attr]=pos+arr[num]+"px";
	 		num++;
	  
	 		if(num===arr.length){
	 			clearInterval(obj.shake); 
	 			endFn&&endFn();
	 			 obj.onOff=false;
	 		}
	 	},50)
	 }

	function opacity(obj,dir,target){
          // 判断当前的位置是不是大于目标点，小于dir就是正值，大于dir就是负值
          dir=Number(getStyle(obj,'opacity'))<target? dir:-dir
          // alert(dir)

           clearInterval(obj.opaTimer);
           obj.opaTimer=setInterval(function(){
                var speed=Number(getStyle(obj,'opacity'))+dir
                 // alert(speed)
                if(speed<target&&dir<0||speed>target&&dir>0){
                      speed=target;
                }
           obj.style.opacity=speed;
           // alert(speed)

           if(speed===target){
                clearInterval(obj.opaTimer);
               
           }
          },100);
    }

function toTwo(n){
				return n<10?'0'+n:''+n;
			}
		