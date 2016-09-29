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
			/*oP.onmouseover = function() {
				right.style.display = "block";
			};
			oP.onmouseout = function() {
				right.style.display = "none";
			}*/
			/*	var oH3 = document.createElement("h3");
				var aP = document.createElement("p");
				oH3.innerHTML = arr[i].top;
				right.appendChild(oH3);
				var oSpan = document.createElement("span");
				var aA1 = document.createElement("a");
				for(var j = 0; j < arr[i].title.length; j++){
					oSpan.innerHTML = arr[i].title[j];
					right.appendChild(aP);
					aP.appendChild(oSpan);
					for(var k = 0; k < arr[i].title[j].value.length; k++){
						aA1.innerHTML = arr[i].title[j].value[k];
						aP.appendChild(aA1);
					};
				};
				*/
				// for(var k = 0; k < arr[i].value1.length; j++){
				// 	aA1.innerHTML = arr[i].value1[k];
				// };
				// for(var q = 0; q < arr[i].value2.length; q++){

				// };
				
				
				
				
				
		};
		/*for(var i = 0; i < arr2.length; i++){
			var oH3 = document.createElement("h3");
			var aP = document.createElement("p");
			oH3.innerHTML = arr2[i].top;
			var oSpan = document.createElement("span");
			var aA1 = document.createElement("a");
			var aA2 = document.createElement("a");
			var aA3 = document.createElement("a");
			var aA4 = document.createElement("a");
			oSpan.innerHTML = arr2[i].title;
			aA1.innerHTML = arr2[i].value1;
			aA2.innerHTML = arr2[i].value2;
			aA3.innerHTML = arr2[i].value3;
			aA4.innerHTML = arr2[i].value4;
			right.appendChild(oH3);
			right.appendChild(aP);
			aP.appendChild(oSpan);
			aP.appendChild(aA1);
			aP.appendChild(aA2);
			aP.appendChild(aA3);
			aP.appendChild(aA4);

		}*/
		
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


	/*++++++++++++++++++++++goods+++++++++++++++++++++++++*/
	$.ajax({
		url: "goodsdata.json",
		type: "GET",
		success:function (data) {
			var html = "";
			var html2 = "";
			for(var i = 0; i < data.length; i++){
				
				html += '<img src = "' + data[i].title +'" />';
			};
			$(".goods_left").html(html);
			html2 = '<img src = "' + data[0].des +'"/ >';
		
			$(".goods_left img").mouseover(function(){
				var a = $(this).index();
				html2  = "";
				html2 = '<img src = "' + data[a].des +'"/ >';
				$(".goods_right").html(html2);
				$("#b_box_all").html(html2);

			});
				$(".goods_right").html(html2);
				$("#b_box_all").html(html2);

		},
	});
	var oS_box=document.getElementById('s_box');
		var oS_position=oS_box.children[2];
		var oS_mark=oS_box.children[0];
		var oB_box=document.getElementById('b_box');
		var oB_box_all=document.getElementById('b_box_all')
		oS_mark.onmouseover=function(){
			oS_position.style.display='block';
			oB_box.style.display='block';

		}
		oS_mark.onmouseout=function(){
			oS_position.style.display='none';
			oB_box.style.display='none';
		}

		oS_mark.onmousemove=function(event){
			var evt=event||window.event;

			var left=evt.offsetX-oS_position.offsetWidth/2;
			//console.log(left)
			
			if(left<0){
				left=0;
			}else if(left>oS_box.offsetWidth-oS_position.offsetWidth){
				left=oS_box.offsetWidth-oS_position.offsetWidth
			}
			//console.log(left)
			oS_position.style.left=left+'px';


			var top=evt.offsetY-oS_position.offsetHeight/2;
			if(top<0){
				top=0;
			}else if(top>oS_box.offsetHeight-oS_position.offsetHeight){
				top=oS_box.offsetHeight-oS_position.offsetHeight
			}
			//console.log(top)
			oS_position.style.top=top+'px';

			//移动的比例  把X值和Y值换算成比例;

			var proportionX=(left/(oS_box.offsetWidth-oS_position.offsetWidth))*1.8;
			var proportionY=(top/(oS_box.offsetHeight-oS_position.offsetHeight))*1.8;

			console.log(proportionX+':'+proportionY)

			//利用比例去算出大小不同的元素的偏移距离；

			oB_box_all.style.left=-proportionX*(oB_box_all.offsetWidth-oB_box.offsetWidth)+'px';

			oB_box_all.style.top=-proportionY*(oB_box_all.offsetHeight-oB_box.offsetHeight)+'px';

		}

	





});