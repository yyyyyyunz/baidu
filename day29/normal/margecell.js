//合并单元格
function margeCell(startrow,col){
	let tab=document.querySelector("#table");

	for(let i=startrow;i<tab.rows.length-1;i++){
		if(tab.rows[startrow].cells[col].innerHTML===tab.rows[i+1].cells[col].innerHTML){
			tab.rows[i+1].cells[col].style.display="none";
			tab.rows[startrow].cells[col].rowSpan+=1;
		}
		else{
			margeCell(i+1,0);
		}
	}
}
