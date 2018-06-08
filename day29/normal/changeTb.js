//改变商品列和地区列的位置
function changeTb(){
	let ipts1=regionCheck.querySelectorAll("input[type=checkbox]:checked");
	let ipts2=productCheck.querySelectorAll("input[type=checkbox]:checked");
	let tab=document.querySelector("#table");
	if(ipts1.length===1&&ipts2.length!==1){
		for(let i=0;i<tab.rows.length;i++){
			let temp=tab.rows[i].cells[0].innerHTML;
			tab.rows[i].cells[0].innerHTML=tab.rows[i].cells[1].innerHTML;
			tab.rows[i].cells[1].innerHTML=temp;
		}
	}
}
