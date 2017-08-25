$.fn.extend({
		showbox:function(options){
		for(i=0;i<options.length;i++){					
			var templete = '<tr>'
								+'<td><img class="table-img" src="'+options[i].img+'"></td>'
								+'<td>'+options[i].bianhao+'</td>'
								+'<td>'+options[i].dianpu+'</td>'
								+'<td>'+options[i].wuping+'</td>'
								+'<td>'+options[i].jiaqian+'</td>'
							+'</tr>'
			$(".table").append(templete)
		}																			
		}
	})