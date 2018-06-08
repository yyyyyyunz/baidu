createCheckBox(items1,regionCheck,"regall");
createCheckBox(items2,productCheck,"proall");
choose(regionCheck,"regall");
choose(productCheck,"proall");

regionCheck.onclick = function first(){
	getData();
	showTable();
	changeTb();
	margeCell(1,0);
}
productCheck.onclick = function second(){
	getData();
	showTable();
	changeTb();
	margeCell(1,0);
}
