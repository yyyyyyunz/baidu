function getBar(list){
	var barwrapper = document.querySelector("#bar-wrapper");
	barwrapper.setAttribute("style","width:600px;height:400px;");

	var myChart=echarts.init(document.getElementById("bar-wrapper"));

	

	var option = {
	    color: ['#3398DB'],
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis : [
	        {
	            type : 'category',
	            data : ['一月', '二月', '三月', '四月', '五月', '六月', '七月',"八月","九月","十月","十一月","十二月"],
	            axisTick: {
	                alignWithLabel: true
	            }
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'直接访问',
	            type:'bar',
	            barWidth: '60%',
	            data:list
	        }
	    ]
	};

	myChart.setOption(option);

}










/*function getBar(list,maxValue){
	let xmlns="http://www.w3.org/2000/svg";
	//新建一个数组用来存储list数据转化成柱子的高度
	let bars=[];
	
	let barwrapper=document.getElementById("bar-wrapper");
	var svgDom = barwrapper.getElementsByTagName("svg");
	console.log(svgDom);

	//找到最高的柱子，映射到maxValue
	let max = getMax(list);
	console.log(max);
	let x = maxValue/max;
	console.log(x);
	//将list数组中的每一个元素映射到柱子的高度
	for(let i=0;i<list.length;i++){
		bars.push(list[i]*x);
	}
	console.log(bars);
	//画出每个柱子
	for(let i=0;i<bars.length;i++){
		let position=35.5+i*50;
		let rect=document.createElementNS(xmlns,"rect");
		rect.setAttribute("x",position);
		rect.setAttribute("y",270-bars[i]);
		rect.setAttribute("width","40");
		rect.setAttribute("height",bars[i]);
		rect.setAttribute("style","fill:pink;stroke:none;");
		svgDom.appendChild(rect);
	}
	return;

	
}

function getMax(list){
	return Math.max.apply(null,list);
}*/
