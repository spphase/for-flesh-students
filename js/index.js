var $containers = $('[data-animation]:not([data-animation-child]), [data-animation-container]');
$containers.scrollAnimations({
	offset:0.97
});


	var justmove = document.getElementById('announce');
	var Height = 36;//单行滚动的高度
	var speeda = 50;//滚动的速度
	var timea;
	var delaya=1900;
	justmove.scrollTop=0;
	justmove.innerHTML+=justmove.innerHTML;//克隆一份一样的内容
	function startScrolla(){
		 timea = setInterval("scrollUpb()",speeda);
		 justmove.scrollTop++;
		 }
	 function scrollUpb(){
		 if(justmove.scrollTop % Height==0){
			 clearInterval(timea);
			 setTimeout(startScrolla,delaya);
			 }
		 else{
				 justmove.scrollTop++;
				 if(justmove.scrollTop >= justmove.scrollHeight/2){
					 justmove.scrollTop =0;
					 }
				 }
		 }
		setTimeout(startScrolla,delaya);
		 
// 西大九十载芳华，九十在沧桑间歇轮播
var area = document.getElementById('moocBox');
 var iliHeight = 24;//单行滚动的高度
 var speed = 50;//滚动的速度
 var time;
 var delay= 2000;
 area.scrollTop=0;
 area.innerHTML+=area.innerHTML;//克隆一份一样的内容
 function startScroll(){
	 time=setInterval("scrollUp()",speed);
	 area.scrollTop++;
	 }
 function scrollUp(){
	 if(area.scrollTop % iliHeight==0){
		 clearInterval(time);
		 setTimeout(startScroll,delay);
		 }else{
			 area.scrollTop++;
			 if(area.scrollTop >= area.scrollHeight/2){
				 area.scrollTop =0;
				 }
			 }
	 }
	 setTimeout(startScroll,delay);

//===========风景一隅轮播
	$(function(){		
		
		//index值用来确定偏移量
		var index = 0;
		$(".hidepart li").eq(index).css('width','508px').css('height','508px');
		//定义变量size,用于获取图片数目，便于图片的增减
		var size = $(".sightslide .hidepart li").length;
		function move(offset){
				$("#sight .hidepart").stop().animate({left:offset*index},700);
				$("#sight .hidepart li").eq(index).css('width','508px').css('height','508px').siblings('li').css('width','254px').css('height','254px');
			}
							
		//右切换
		$("#sight .shiftbtn-r").click(function(){	
			index++;
			if(index==size){
			 	index = 0;
			}
			move(-245);
		});
		//左切换
		$(".shiftbtn-l").click(function(){
			index--;
			// 再点击一次,index变为-1，赋值为size-1，跳转到最后一张图片
			if(index==-1){
			 	index = size-1;
			 }
			 move(-245);
			});

		// 自动轮播
		var autoplayb = setInterval(function slide(){
			index++;
			index = index==size?0:index;
			$("#sight .hidepart").stop().animate({left:-245*index},700);
				$("#sight .hidepart li").eq(index).css('width','508px').css('height','508px').siblings('li').css('width','254px').css('height','254px');
			},3000)

		// 移入移出停止开始轮播
		$(".sightslide").hover(function(){
			clearInterval(autoplayb);
		},function(){
			autoplayb = setInterval(function slide(){
			index++;
			index = index==size?0:index;
			$("#sight .hidepart").stop().animate({left:-245*index},700);
				$("#sight .hidepart li").eq(index).css('width','508px').css('height','508px').siblings('li').css('width','254px').css('height','254px');
			},3000)
		})
	})


//================精彩校园活动

	$(function(){		
		var index = 0;
		var size = $("#container .pic-list li").length;
		// alert(size);
		function moveagain(a){
			$(".pic-list").stop().animate({left:a*index},500);
		}
		//右切换
		$(".but-r").click(function(){	
			index++;
			if(index==size - 1){
			 	index = 0;
			}
			moveagain(-286);
		})	

		//左切换
		$(".but-l").click(function(){	
			//点击一次,index的值就增加一次	
			index--;
			if(index== -2){
			 	index = size - 2;
			 }
			moveagain(-286);
		});
		// 自动播放
		var autoplaya = setInterval(function slide(){
			index++;
			index = index==size - 1?0:index;
			$(".pic-list").stop().animate({left:-286*index},500);
			},2400)
		// 移入移除停止开始轮播
		$(".pic-list,.btnbox").hover(function(){
			clearInterval(autoplaya);
		},function(){
			autoplaya = setInterval(function slide(){
			index++;
			index = index==size - 1?0:index;
			$(".pic-list").stop().animate({left:-286*index},500);
			},2400)
		})

	});




//===================================
$("#element").parallux({
    fullHeight: true,
    enableMobile: false,
    onImageLoad: 'fadeIn'
});

// 返回顶部
		$(window).scroll(
  			function()
  			{
  				$("#back").css("display","none")
	  			if ($(window).scrollTop() <= 100) {
				$("#back").fadeOut();
				}
				else if ($(window).scrollTop() > 200) {
					$("#back").fadeIn();
				} 
			 });

		$("#back .turnback").click(function(){
			$("html,body").animate({scrollTop:0},600);
		});

		$("#back ul").on('click','li',function (a) 
		{
			var id = $(this).data("to");
			$("html,body").animate({scrollTop:$("#"+id).offset().top},600);
		});

