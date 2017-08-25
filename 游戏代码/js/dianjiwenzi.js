$(function(){
	
	$(".ul-box li a").click(function(){											
		    if(!$(this).hasClass("on")){
		    	$(this).addClass("on").css({"color":"red"});
		    }else{
		    	$(this).removeClass("on").css({"color":"black"});
		    }
	})	
})
