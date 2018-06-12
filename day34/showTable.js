
let wrapper=document.querySelector("#table-wrapper");
let table=document.createElement("table");
table.setAttribute("id","table");

function showTable(){

	table.innerHTML="";
	let tr=document.createElement("tr");
	tr.innerHTML="<th>商品</th><th>地区</th>"+
	"<th>一月</th><th>二月</th><th>三月</th><th>四月</th><th>五月</th><th>六月</th>"+
	"<th>七月</th><th>八月</th><th>九月</th><th>十月</th><th>十一月</th><th>十二月</th>";
	table.appendChild(tr);
	wrapper.appendChild(table);

	for(let i=0;i<list.length;i++){
		let tr=document.createElement("tr");
		for(let key in list[i]){
			if(!Array.isArray(list[i][key])){
				let td=document.createElement("td");
				td.innerHTML=list[i][key];
				tr.appendChild(td);
			}
			else{
				for(let k=0;k<list[i][key].length;k++){
					let td=document.createElement("td");
					td.innerHTML=list[i][key][k];
					tr.appendChild(td);
				}
			}
		}
		table.appendChild(tr);
	}
	wrapper.appendChild(table);
}
