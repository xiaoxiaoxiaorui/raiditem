// JavaScript Document
$(function(){
	$('#nav li').hover(function(){
		$('span.spanBorder',this).stop().css('height','2px');
		$('span.spanBorder',this).animate({
			left:'0',
			width:'100%',
		    right:'0'
		},200);
	},function(){
		$('span.spanBorder',this).stop().animate({
			left:'50%',
			width:'0',
			
		},200);
	});
});

$(function(){
		showScroll();
		function showScroll(){
			$(window).scroll( function() { 
				var scrollValue=$(window).scrollTop();
				scrollValue > 100 ? $('div[class=backTop]').fadeIn():$('div[class=backTop]').fadeOut();
			} );	
			$('#backTop').click(function(){
				$("html,body").animate({scrollTop:0},300);	
			});	
		}
	});
	
$(function(){
   $(".LfsubMenu .GameTitleh3").mouseover(function () {
                $('.LfsubMenu .GameDiv').show("fast");
            });
            $(".LfsubMenu").mouseleave(function () {
                $('.LfsubMenu .GameDiv').hide("fast");
            });
	});
	
$(function(){
    var w1 = $("#GameDivHeight").outerHeight(true);;
    //$("#d2").width(w1 + 38);
	$('.BannerJs img').css('height',w1);

})	

//全选
function checkAll(id,elem1,elem2){
$(elem1).click(function(){   
    if(this.checked){   
        $(id).find(elem2+" :checkbox").prop("checked", true);  
    }else{   
	    $(id).find(elem2+" :checkbox").prop("checked", false);
    }   
});

}
//设置全选复选框


function allchk(id,elem1,elem2){
	var chknum = $(id).find(elem2+" :checkbox").size();//选项总个数
	var chk = 0;
	$(id).find( elem2+" :checkbox").each(function () {  
        if($(this).prop("checked")==true){
			chk++;
		}
    });
	if(chknum==chk){//全选
		$(elem1).prop("checked",true);
	}else{//不全选
		$(elem1).prop("checked",false);
	}
}

//反选
function checkInverse(id,elem1,elem10,elem2){
	
	$(elem1).click(function () { 
    $(id).find(elem2+" :checkbox").each(function () {  
        $(this).prop("checked", !$(this).prop("checked"));  
    });
	allchk(id,elem10,elem2);
 })

}

//allchk("#checkList","#checkbox-all",".checkSelect");
//allchk("#checkList0","#checkboxAll",".checkSelect");

$("#checkList").find(".checkSelect :checkbox").click(function(){
	allchk("#checkList","#checkbox-all",".checkSelect");
});

$("#checkList0").find(".checkSelect :checkbox").click(function(){
	allchk("#checkList0","#checkboxAll",".checkSelect");
});


checkAll("#checkList","#checkbox-all",".checkSelect");
checkAll("#checkList0","#checkboxAll",".checkSelect");

checkInverse("#checkList","#checkbox-inverse","#checkbox-all",".checkSelect");
checkInverse("#checkList0","#checkboxInverse","#checkboxAll",".checkSelect");




/****$(function () {
	//全选或全不选
	$("#all").click(function(){   
    	if(this.checked){   
        	$("#list :checkbox").prop("checked", true);  
    	}else{   
		$("#list :checkbox").prop("checked", false);
    	}   
 	}); 
	//全选  
    $("#selectAll").click(function () {
         $("#list :checkbox,#all").prop("checked", true);  
    });  
	//全不选
    $("#unSelect").click(function () {  
         $("#list :checkbox,#all").prop("checked", false);  
    });  
    //反选 
    $("#reverse").click(function () { 
         $("#list :checkbox").each(function () {  
              $(this).prop("checked", !$(this).prop("checked"));  
         });
		 allchk();
    });
	
	//设置全选复选框
	$("#list :checkbox").click(function(){
		allchk();
	});
 
	//获取选中选项的值
	$("#getValue").click(function(){
		var valArr = new Array;
        $("#list :checkbox[checked]").each(function(i){
			valArr[i] = $(this).val();
        });
		var vals = valArr.join(',');
      	alert(vals);
    });
}); 
function allchk(){
	var chknum = $("#list :checkbox").size();//选项总个数
	var chk = 0;
	$("#list :checkbox").each(function () {  
        if($(this).prop("checked")==true){
			chk++;
		}
    });
	if(chknum==chk){//全选
		$("#all").prop("checked",true);
	}else{//不全选
		$("#all").prop("checked",false);
	}
}****/

//$(".jian").each(function(){
    $(".less").click(function(){
		
	    var Checked=$(this).parents('li').find('.checkSelect :checkbox');
		var n=$(this).parent().find(".txtNum0");
	    if(n.val()>1){
		  var Num=parseInt(n.val());
		  n.val(Num-1);
		   }
		  setTotal();  
		
		})

//$(".jia").each(function(){
    $(".add").click(function(iiii){
		
	    var Checked=$(this).parents('li').find('.checkSelect :checkbox');
		var n=$(this).parent().find(".txtNum0");
		var Num=parseInt(n.val());
		n.val(Num+1);
	    setTotal();  
	})

//选择商品后显示总价格
$("#checkList li").find('.checkSelect :checkbox').click(function(){
	setTotal();
})

//全选后的总价格
$("#checkbox-all").click(function(){
	setTotal();
})

//反选后的总价格
$("#checkbox-inverse").click(function(){
	setTotal();
})

//求商品总价格
setTotal();

function setTotal(){
 	var s=0;
 	$("#checkList li").each(function(){
	var Checked=$(this).find('.checkSelect :checkbox');
	if(Checked.prop("checked")){
		
	    v=parseInt($(this).find('input.txtNum0').val())*parseFloat($(this).find('span.span_price strong').text());
	    if(isNaN(v)){
		v=0;}
    	s+=v;
	   }
	});
	
 	$("#setTotal").html(s.toFixed(2));
 	}
	
//删除	
$("#checkList li").find(".span_last").find(".del").click(function(){
  $(this).parents("li").remove();
  setTotal();	
	}
);

//全部删除			
  $('#DelAll').click(function () {
	 
      $("#checkList li").find('.checkSelect :checkbox').each(function () {
		  if($(this).prop("checked")){
            $(this).parents('li').remove();
			 setTotal();	
			}
    });
 })
 
//添加	
$("#checkList0 li").find(".span_last").find(".addElem").click(function(){
  var str=$(this).parents("li");
  $('#checkList li.Lastchild').before(str);
  $(this).parents("li").find('.checkSelect :checkbox').prop("checked",true);
  $(this).children("a").text("Delete");
  $(this).click(function(){
	 $(this).parents("li").remove();
	  });
  setTotal();	
	}
);
//全部添加			
$('#addElemAll').click(function () {
	 $("#checkList0 li").find('.checkSelect :checkbox').each(function () {
		    if($(this).prop("checked")){
			 var str=$(this).parents("li");
             $('#checkList li.Lastchild').before(str);
			  $(str).find(".addElem").click(function(){
	             $(this).parents("li").remove();
	            });
			 setTotal();
			}
			$(str).find(".addElem").children("a").text("Delete");
    });
 })
 

	
$(function(){
    var w1 = $("#GameDivHeight").outerHeight(true);;
    //$("#d2").width(w1 + 38);
	$('.BannerJs img').css('height',w1);

})	


 $(function(){
				
	$( '.dropdown' ).hover(
		function(){
			$(this).children('.goodMenu').slideDown(200);
		},
		function(){
			$(this).children('.goodMenu').slideUp(200);
		}
	);
}); // end ready

$(function(){
	
   $(".ulList0 .DivList").mouseover(function () {
                $(this).find('span.buy-now em').css('visibility','visible');
            });
   $(".ulList0 .DivList").mouseleave(function () {
                $(this).find('span.buy-now em').css('visibility','hidden');
            });
});