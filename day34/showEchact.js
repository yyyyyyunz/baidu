function showEchact(target){
	//获取表格数据
	let list = getData();
	console.log(list);
	//获取表格中的每一行
	let tr = document.querySelectorAll("tr");
	console.log(tr);
	//对表格中除第一行外每一行添加mouseover事件，传入触发事件的对应行（target)
	for(let i=1;i<tr.length;i++){
		//判断是哪一行，对应它处在list中的位置，提取list中的数据
		for(let j=0;j<tr[i].childNodes.length;j++){
			if(target === tr[i].childNodes[j]){
				var lists = list[i-1].sale;
				console.log(lists);
				getBar(lists);
				getLine(lists);
			}	
		}
		
	}
}
