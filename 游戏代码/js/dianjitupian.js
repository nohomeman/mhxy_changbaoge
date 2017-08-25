$(function(){
		$(".jineng-img img").click(function(){
		if(!$(this).hasClass("on-img")){
	    	$(this).addClass("on-img").css({"opacity":"1"});
	    }else{
	    	$(this).removeClass("on-img").css({"opacity":"0.6"});
	    }
	})
})
