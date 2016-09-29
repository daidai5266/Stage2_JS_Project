$(function(){
		ajax("get", "http://10.30.162.8/amazon/亚马逊top图片数据.json", "", function (data) {
		var arr = JSON.parse(data)._data;
		var oTop = document.getElementById('top_id');
		var oDiv = document.createElement('div');
		var oImg2 = document.createElement('img')
		var oImg = document.createElement('img');
		var oBtn = document.createElement('button');
		
		oImg.src = arr[0].src;
		oImg2.src = arr[1].src;
		oDiv.style.width = 800 + "px";
		oBtn.innerHTML = "X";
		oTop.appendChild(oImg);
		
	});




	var sel = document.getElementById("sel_id");
	sel.onmouseover = function () {
		sel.style.backgroundColor = "#bcbcbc";
	}
	sel.onmouseout = function() {
		sel.style.backgroundColor = "#efefef";
	}





	var list = document.getElementById("list_id");
	var right = document.getElementById("right_id");
	var btn1 = document.getElementById("btn_id");
	var btn1_img = btn1.getElementsByTagName('img');

	btn1.onmouseover = function () {
		btn1.style.border = "1px solid #bcbcbc";
		list.style.display = "block";
	};
	list.onmouseover = function(){
		list.style.display = "block";
	};
	
	btn1.onmouseout = function () {
		btn1.style.border = "none";
		list.style.display = "none";
	
	};
	list.onmouseout = function(){
		list.style.display = "none";
	}
	


	var oUl = document.getElementById("ul_id");
	var oLi = oUl.getElementsByTagName("li");
	var Oa = oUl.getElementsByTagName("a");
	for(var i = 0; i < oLi.length; i++){
		oLi[i].onmouseover = function() {
			this.style.textDecoration = "underline";	
		};
		oLi[i].onmouseout = function () {
			this.style.textDecoration = "none";
		};
	};
	for(var i = 0; i <Oa.length; i++){
		Oa[i].onmouseover = function(){
			this.style.color = "orange";
		}
		Oa[i].onmouseout = function(){
			this.style.color = "#1b4c86";
		};
	};

	var my = document.getElementById("btn_my");
	var car = document.getElementById("btn_car");
	var hert = document.getElementById("btn_hert");
	var myDiv = document.getElementById("bdiv_id");
	var myHert  = document.getElementById("hert_div");
	my.onmouseover = function () {
		this.style.border = "1px solid #ccc";
		this.style.borderRadius = 5 + "px";
		myDiv.style.display = "block";
	};
	myDiv.onmouseover = function () {
		
		myDiv.style.display = "block";
	};
	my.onmouseout = function(){
		this.style.border = "none";
		myDiv.style.display = "none";
	};
	myDiv.onmouseout = function () {
		
		myDiv.style.display = "none";
	};
	car.onmouseover = function () {
		this.style.border = "1px solid #ccc";
		this.style.borderRadius = 5 + "px";
	};
	car.onmouseout = function(){
		this.style.border = "none";
		this.style.borderRadius = 0 + "px";
	};

	hert.onmouseover = function () {
		this.style.border = "1px solid #ccc";
		this.style.borderRadius = 5 + "px";
		myHert.style.display = "block";
	};
	$("#hert_div").hover(function(){
		this.style.display = "block";
	},function () {
		this.style.display = "none";
	});

	hert.onmouseout = function(){
		this.style.border = "none";
		this.style.borderRadius = 0 + "px";
		myHert.style.display = "none";
	};





	ajax("get", "http://10.30.162.8/amazon/二级菜单data.json", "", function(data){
		var arr = JSON.parse(data);
		//var arr2 = JSON.parse(JSON.parse(data)._data).menu;
		//加载左侧数据   仍需修改
		for(var i = 0; i < arr.length; i++){
			var oP = document.createElement("p");
			var oA = document.createElement("a");
			var oA2 = document.createElement("a");
			var oA3 = document.createElement("a");
			oA.innerHTML = arr[i].des;
			oA2.innerHTML = arr[i].des2;
			oA3.innerHTML = arr[i].des3;
			list.appendChild(oP);
			oP.appendChild(oA);
			oP.appendChild(oA2);
			oP.appendChild(oA3);
			oP.click(function(){
				alert($(this).index());
			})
			
				
				
				
				
				
		};
		
		
		var oP2 = list.getElementsByTagName("p");
		for(var i = 0; i < oP2.length; i++){
			/*var a = oP2[i].index;
			a= a- 1;*/
			//oP2[i].index = i ;
			oP2[i].onmouseover = function () {
				right.innerHTML = "";//每次加载清除前一次加载数据
				right.style.display = "block";
				 var a = $(this).index() - 1 ;//记录所滑过的节点的下标
				 //alert($(this).index());
				// a+=1;
				var oH3 = document.createElement("h3");
				oH3.innerHTML = arr[a].top;//根据不同下标加载不同数据
				right.appendChild(oH3);
				
				
				//加载右侧数据
				for(var j = 0; j < arr[a].title.length; j++){
					var aDiv = document.createElement("div");
					var aP = document.createElement("p");
					var oSpan = document.createElement("span");
					oSpan.innerHTML = arr[a].title[j].Atitle;
					aP.appendChild(oSpan);
					for(var k = 0; k < arr[a].title[j].value.length; k++){
						var aA1 = document.createElement("a");
						aA1.innerHTML = arr[a].title[j].value[k];
						aDiv.appendChild(aA1);
					};
					right.appendChild(aDiv);
					right.appendChild(aP);
				};

			};
			oP2[i].onmouseout = function () {
				right.style.display = "none";
			};

		};
		right.onmouseover = function () {
			right.style.display = "block";
		};
		right.onmouseout = function () {
			right.style.display = "none";
		};
	});








});