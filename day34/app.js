createCheckBox(items1,regionCheck,"regall");
createCheckBox(items2,productCheck,"proall");
choose(regionCheck,"regall");
choose(productCheck,"proall");
regionCheck.onclick = function first(){
	getData();
	showTable();
	changeTb();
	margeCell(1,0);
	showEchact();
}
productCheck.onclick = function second(){
	getData();
	showTable();
	changeTb();
	margeCell(1,0);
	showEchact();
}


table.onmouseover = function third(event){
	let target = event.target||event.srcElement;
	console.log(target);
	showEchact(target);
}

table.onmouseout = function four(event){
	showLines();
}

/*
//获得表格数据
console.log(list);
//获取表格中的每一行
var tr = document.querySelectorAll("tr");
console.log(tr);
//为除第一行之外的所有行添加mouseover函数
for(let i=1;i<tr.length;i++){
		tr.onmouseover = function showEchact(event){
			let lists = list[i-1].sale;
			console.log(lists);
			console.log("在showEchact函数中的"+lists);
			getBar(lists);
			getLine(lists);
		};
	}


	*/



