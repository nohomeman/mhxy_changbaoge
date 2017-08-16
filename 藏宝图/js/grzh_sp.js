 $(function() {
        	// 全选
           $("#checkAll").click(function() {
                $('input[name="subBox"]').attr("checked",this.checked); 
            });
            var $subBox = $("input[name='subBox']");
            $subBox.click(function(){
                $("#checkAll").attr("checked",$subBox.length == $("input[name='subBox']:checked").length ? true : false);
            });
            // hover
            $('.wuping .li').hover(
            	function(){
            		$(this).find('ul').css({'display':'block'})
            },
            	function(){
            		$(this).find('ul').css({'display':'none'})
            });
            // model
            $("#btn1").click(function(){
					var txt=  "确定删除？";
					window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
				});
            $("table .p").click(function(){
					var txt=  "亲~只有将商品下架才能进行编辑。你确定要将此商品下架？";
					window.wxc.xcConfirm(txt);
				});
            $('.tianjia').click(function(){

            	$('.modal').css({'display':'block'});$('.tianjiasp').css({'display':'block'});
            })
        });