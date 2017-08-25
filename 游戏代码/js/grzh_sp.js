 $(function() {
        	// 全选
            (function(){
               $("#checkAll").click(function() {
                    $('input[name="subBoxs"]').prop("checked",this.checked); 
                });
                var $subBoxs = $("input[name='subBoxs']");
                $subBoxs.click(function(){
                    $("#checkAll").prop("checked",$subBoxs.length == $("input[name='subBoxs']:checked").length ? true : false);
                })
            })();



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

             var availableTags = [
                      "ActionScript",
                      "AppleScript",
                      "Asp",
                      "BASIC",
                      "C",
                      "C++",
                      "Clojure",
                      "COBOL",
                      "ColdFusion",
                      "Erlang",
                      "Fortran",
                      "sGroovy",
                      "ssHaskell",
                      "sJava",
                      "sJavaScript",
                      "sLisp",
                      "sPerl",
                      "sPHP",
                      "sPython",
                      "sRuby",
                      "Scala",
                      "Scheme"
                    ];
    $( "#tags" ).autocomplete({
      source: availableTags,
    });
    var data=[{"xiangqingtitle":"名字"},
                        {"shuju":{"miaoshu":["上古名剑，健身宽大，湛然如墨，骨假其脊，血碎琪琪，成绝世剑<br>【装备角色】逍遥生，剑侠客，极武圣"],
                                  "dengji":["等级 100 五行 金"],
                                  "jichushuxing":["伤害 +376 命中 +423<br>耐久度  715<br>力量 +27<br>"],
                                  "fumo":["速度 +104"],
                                  "teji":["特技：流云诀<br>特效：愤怒<br>套装效果：变身术之葫芦宝贝"],
                                  "shitou":["开孔运数：5孔、5孔（双5孔）<br>符石：气血 +15 速度 +1。5<br>符石：气血 +15 速度 +1。5<br>符石：气血 +15 速度 +1。5<br>符石：气血 +15 速度 +1。5<br>"],
                                  "zhizaozhe":["制造者：饭特西打造"],
                                  "ronglian":["熔炼效果:<br><br>+2防御"]
                                }
                        }
                    ];
            for (var j in data[0]) {
                console.log(data[0][j])
                var title='<p class="'+j+'">'+data[0][j]+'</p>';
                $(".xiangqing-right").append(title)
            }
                        
            for (var i in data[1].shuju) {
                var html='<div class="'+i+'">'+data[1].shuju[i][0]
                    +'</div>';
            $(".xiangqing-right").append(html)
            }   
        });