function getLine(list){
	var linewrapper = document.getElementById("line-wrapper");
	linewrapper.setAttribute("style","width:600px;height:400px");

	var myChart = echarts.init(document.getElementById("line-wrapper"));

	var option={
		color:["#ab23ab"],

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
		series:[{
			data:list,
			type:"line"
		}]
	};

	myChart.setOption(option);
}
