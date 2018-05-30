 function addLoadEvent(func){
	var oldonload = window.onload;
	if(typeof window.onload != 'function'){
		window.onload = func;
	}
	else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}

function dec2bin(decNumber,binbit){
  if(decNumber<0 || !Number.isInteger(decNumber)){
    alert("输入值必须为非负整数!");
    return false;
  }
  let temp=decNumber;
  let result=[];
  if(decNumber==0){
    return 0;
  }
  while(temp!==0){
    result.unshift(temp%2);
    temp=Math.floor(temp/2);
  }
  if(result.length>binbit){
  	console.log("超过给定位数！");
  }
  else{
  	while(result.length<binbit){
  		result.unshift("0");
  	}
  }
  return result.join('');
}

function main(){
  let btn=document.getElementById("trans-btn");
  btn.onclick= function(){
    let decNumber=parseInt(document.getElementById("dec-number").value);
    document.getElementById('result').innerHTML=dec2bin(decNumber,3);
  }

}

function game(){
	for(var i=1;i<=100;i++){
		var p=i;
		if(i%3===0){
			p="PA";
		}
		var s=i.toString();
		for(var j=0;j<s.length;j++){
			if(s[j]==3){p="PA";}
		}
		console.log(p);
	}
}

function Multiplication(){
	for(var i=1;i<10;i++){
		var s="";
		for(var j=1;j<=i;j++){
			var mul=i*j;
			s=s+" "+j+"*"+i+"="+mul;
		}
		console.log(s+"\n");

	}
}
addLoadEvent(main);
addLoadEvent(Multiplication);
