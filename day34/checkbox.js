let regionCheck=document.querySelector("#region-radio-wrapper");
let productCheck=document.querySelector("#product-radio-wrapper");

let items1=[];
let items2=[];

function getItem(items,k){
	for(let i=0;i<sourceData.length;i++){
		if(items.indexOf(sourceData[i][k])===-1){
			items.push(sourceData[i][k]);
		}
	}
	return items;
}

items1=getItem(items1,"region");
items2=getItem(items2,"product");

function createCheckBox(items,el,id){
	//创建全选checkbox,添加id是为了利用事件委托时方便与其他单选框区分
	let ipt=document.createElement("input");
	ipt.setAttribute("type","checkbox");
	ipt.setAttribute("id",id);
	ipt.checked=true;
	let txt=document.createTextNode("全选");

//对数组Items进行遍历，创建checkbox
	for(let i=0;i<items.length;i++){
		let ipt=document.createElement("input");
		ipt.setAttribute("type","checkbox");
		ipt.value=items[i];
		ipt.checked=true;
		let text=document.createTextNode(items[i]);
		el.appendChild(ipt);
		el.appendChild(text);
	}
	el.appendChild(ipt);
	el.appendChild(txt);
}

function choose(el,id){
	el.addEventListener("click",function(event){
		event=event||window.event;
		let target=event.target||event.srcElement;
		let allIput=document.getElementById(id);
		let ipts=el.querySelectorAll("input");
		switch(target.id){
			//当id存在的情况下，也就是全选的时候，点击将所有的checkbox都选上
			case id:
				for(let i=0;i<ipts.length;i++){
					ipts[i].checked=true;
				}
				break;
			default:
				let checkedArr=[];
				for(let i=0;i<ipts.length-1;i++){
					if(ipts[i].checked===true){
						checkedArr.push(ipts[i]);
					}
				}
				if(checkedArr.length===3){
					allIput.checked=true;
				}
				else if(checkedArr.length===0){
					target.checked=true;
				}
				else{
					allIput.checked=false;
				}
		}
	},true);
}
