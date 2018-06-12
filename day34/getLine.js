var myChart2;
function getLine(list){
	//console.log(list);
	if(myChart2!=""&&myChart2!=null&&myChart2!=undefined){
		myChart2.dispose();
	}
	var linewrapper = document.getElementById("line-wrapper");
	linewrapper.setAttribute("style","width:600px;height:400px");

	 myChart2 = echarts.init(document.getElementById("line-wrapper"));

	var option={
		color:["#ff4d4d","#ff3333","#ff1a1a","#ff0000","#e60000","#cc0000"],

		grid:{
			left: "3%",
			right: "4%",
			bottom: "3%",
			containLabel : true
		},

		xAxis:{
			type:"category",
			data : ['一月', '二月', '三月', '四月', '五月', '六月', '七月',"八月","九月","十月","十一月","十二月"],
		},
		yAxis:{
			type:"value"

		},
		series:getSerise(list),
	};

	myChart2.setOption(option);
}

function getSerise(list){
	let series=[];
	var d;
	for(let i=0;i<list.length;i++){
		if(Array.isArray(list[i])){
			d={
				data:list[i],
				type:"line"
			}
			series.push(d);
		}
		else{
			d={
				data:list,
				type:"line"
			}
			series.push(d);
			break;
		}
	}
	return series;
}
