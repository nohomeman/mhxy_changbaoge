$(function(){	
	$(".cb-left-box-lx>div").click(function(){											
		    if(!$(this).hasClass("cb-active")){
		    	$(this).addClass("cb-active").siblings().removeClass("cb-active");
		    }
	})	
	
	$(".content-top li").click(function(){											
		    if(!$(this).hasClass("active")){
		    	$(this).addClass("active").siblings().removeClass("active");
		    }
	})
})