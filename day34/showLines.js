function showLines(){
	//在出现表格数据时，显示表格中所有数据对应的折线图
	//得到所有list中需要显示的数据时，传入一个数组
	//此时的getLine函数改成了适应一组或多组数据显示折线图的格式
	var lists=[];

	for(let i=0;i<list.length;i++){
		lists.push(list[i].sale);
	}
	//console.log(lists);
	getLine(lists);
}
