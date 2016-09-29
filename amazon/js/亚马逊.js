
$(document).ready(function(){
	//——————————————————————————————————top
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



	//-------------下拉菜单
	var sel = document.getElementById("sel_id");
	sel.onmouseover = function () {
		sel.style.backgroundColor = "#bcbcbc";
	}
	sel.onmouseout = function() {
		sel.style.backgroundColor = "#efefef";
	}



	//全部分类按钮
	var btn1 = document.getElementById("btn_id");
	var btn1_img = btn1.getElementsByTagName('img');
	btn1.onmouseover = function () {
		btn1.style.border = "1px solid #bcbcbc";
	};
	btn1.onmouseout = function () {
		btn1.style.border = "none";
	};

	//导航菜单
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
	

	//导航栏右侧
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
	myHert.onmouseover = function(){
		this.style.display = "block";
	};
	myHert.onmouseout = function(){
		this.style.display = "none";
	}
	hert.onmouseout = function(){
		this.style.border = "none";
		this.style.borderRadius = 0 + "px";
		myHert.style.display = "none";
	};


	//二级菜单
	var list = document.getElementById("list_id");
	var right = document.getElementById("right_id");
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
		
		//获取创建的左侧里每一个节点 
		var oP2 = list.getElementsByTagName("p");
		for(var i = 0; i < oP2.length; i++){
			oP2[i].onmouseover = function () {
				right.innerHTML = "";//每次加载清除前一次加载数据
				right.style.display = "block";
				 var a = $(this).index() - 1 ;//记录所滑过的节点的下标
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
				var oImgb = document.createElement("img");
				oImgb.src = arr[a].src;
				right.appendChild(oImgb);

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

//--------------------------------------------
	//轮播图
	$.ajax({

			url: "data3.json",
			type: "GET",
			success:function(data){
				var aPlay = $("#play"); 
				var aDiv5 = $("#play").find("div")
				var aOl = $("#play").find("ol");
				var aBtn5 = $("#play").find("ol").find("li");
				var oUl5 = $("#play").find("ul");
				var aLi5 = oUl5.find("li");

				//记录当前被选中的按钮
				var iNow = 0;
				var timer = null;
				var timer2 = null;

				aPlay.hover(function () {
					aDiv5.animate({bottom:"-5px"});
					aOl.animate({bottom:"-5px"});
				},function () {
					aDiv5.animate({bottom:"-50px"});
					aOl.animate({bottom:"-50px"})
				})
				aBtn5.mouseover(function(){
					iNow = $(this).index();
					tab();
				});

				timer = setInterval(timerInner, 2000);
				$("#play").hover(function(){
					clearInterval(timer);
				}, function(){
					timer = setInterval(timerInner, 2000);
				});


				function tab(){
					//当点击的时候,将所有的按钮class都清空
					aBtn5.attr("class", "");
					aBtn5.eq(iNow).attr("class", "active");
					if(iNow == aLi5.size() - 1 ){
						aBtn5.eq(0).attr("class", "active");
					}
					oUl5.animate({top: -304 * iNow}, function(){
						if(iNow == aLi5.size() - 1){
							iNow = 0;
							oUl5.css("top", 0);
						}
					});
				};

				function tab2(){
					aBtn5.attr("class", "");
					aBtn5.eq(iNow).attr("class", "active");
					if(iNow == aLi5.size() - 1 ){
						aBtn5.eq(0).attr("class", "active");
					}
					aPlay.css("background",data[iNow].src);
				}

				function timerInner(){
					iNow++;
					tab();
				};
				function timerInner2() {
					iNow++;
					tab2();
				}
			

			$().extend({
				size: function(){
					return this.elements.length;
				}
			});
		}

			
	});
	
			

/*++++++++++++++++++++++++++++data1数据加载++++++++++++++++++++++++++++*/

$.ajax({
	url: "data1.json",
	type: "GET",
	success: function(data){
		var html = "";
		for(var i = 0; i < data.length; i++){
			html += '<div> <a herf="#"><span class="title_black">'+data[i].top1+'</span></a> <a herf = "#"><span class="title_orange">'+data[i].top2+'</span></a><p class = "title_red">'+data[i].span1+'</p><p class = "title_price">' +data[i].span2+'</p><p class = "title_time">'+data[i].span3+'</p><img src = "'+data[i].src+'" class = "title_img" /></div>'
		};
		$(".hot div").html(html);
		$(".title_black").hover(function(){
			$(this).css("color","orange");
		},function(){
			$(this).css("color","black");
		});
		$(".title_price").hover(function(){
			$(this).css("color","orange");
		},function(){
			$(this).css("color","red");
		});
	},
});

$.ajax({
	url: "data2.json",
	type: "GET",
	success:function(data){
		var html1 = "";
		var html2 = "";
		for(var i = 0; i < data.length; i++){
			html1 = '<h3>'+data[i].top+'</h3>';
			html2 = '<ul><li><img src="'+data[i].src+'"><p>'+data[i].span1+'</p><span>'+data[i].span2+'</span></li><li><img src="'+data[i].src+'"><p>'+data[i].span1+'</p><span>'+data[i].span2+'</span></li><li><img src="'+data[i].src+'"><p>'+data[i].span1+'</p><span>'+data[i].span2+'</span></li><li><img src="'+data[i].src+'"><p>'+data[i].span1+'</p><span>'+data[i].span2+'</span></li><li><img src="'+data[i].src+'"><p>'+data[i].span1+'</p><span>'+data[i].span2+'</span></li><li><img src="'+data[i].src+'"><p>'+data[i].span1+'</p><span>'+data[i].span2+'</span></li></ul>'
		};
		$(".shoes").html(html2);
		$(".shoes ul li").mouseover( function () {
			$(this).animate({});
		});
	}
});


$.ajax({
	url: "Zdata.json",
	type: "GET",
	success: function(data){
		var html2 = '<img src = "' +data[0].goods + '" />';
		var html = "";
		for(var i = 0; i < data.length; i++){
			html += '<span>' + data[i].totle +'</span>';
		};
		html = "<h3>时时Z秒杀</h3>" + html;
		$(".seckill").html(html);
		$(".goods").html(html2);
		$(".seckill span").click(function(){
			html2 = "";
			var a = $(this).index()-1;
			html2 += '<img src = "' +data[a].goods + '" />'
			$(".goods").html(html2);
		});
	},
});



$.ajax({
	url: "Jdata.json",
	type: "GET",
	success:function(data){
		var html = "";
		for(var i = 0; i < data.length; i++){
			html += '<dt><img src="' + data[i].src + '"/></dt>';
		};
		$(".warter dl").html(html);
		$("#dl_id dt").hover(function(){
			$(this).animate({opacity:1});
		},function(){
			$(this).animate({opacity:0.7});	
		})
	},
})
	

$.ajax({
	url: "Rdata.json",
	type: "GET",
	success:function(data){
		var html = "";
		for(var i = 0; i < data.length; i++){
			html += '<img src = "' + data[i].src + '" />';
		};
		$(".right_top3 a").html(html);
	},
})		
	
	

});














