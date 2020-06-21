// const { SlowBuffer } = require("buffer"); 
/* var swiper = new Swiper('.swiper-container',{
    pagination:{
        el:'.swiper-pagination',
    },
}); */
var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true, 
      renderBullet: function (index, className) {   
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        }, 
    },
});   

$('.swiper-slide').mouseenter(function () { 
        swiper.autoplay.stop();
})
$('.swiper-slide').mouseleave(function () {
    swiper.autoplay.start();

});
$('.swiper-pagination span').mouseenter(function(){
    $(this).addClass("swiper-slide-active")
    .siblings().removeClass("swiper-slide-active"); 
    var index = $(this).index();  
    if(index==7){
        $('.bg').css("background","#A5F1E4"); 
    }else{
        $('.bg').css("background","#FF4F72");
    }
    
});
//swiper-slide swiper-slide-active 
//class="swiper-pagination-bullet swiper-pagination-bullet-active"
//轮播图v 
//TOP hover
$('.a1').hover(function(){
    $('.My-E').show();
});
$('.a1').mouseleave(function(){
    $('.My-E').hide();
});
$('.a2').hover(function(){
    $('.myCollect').show();
});
$('.a2').mouseleave(function(){
    $('.myCollect').hide();
});
$('.a3').hover(function(){
    $('.QRcode').show();
});
$('.a3').mouseleave(function(){
    $('.QRcode').hide();
});

//选项卡
$(function ()
{
　　$(".siderbar>div").click(function ()
　　{
　　　　$(this).addClass("active").siblings().removeClass("active");
　　　　 var index = $(this).index();
　　　　$(".slide-content-nav").children().eq(index).addClass("active")
　　　　.siblings().removeClass("active"); 
　　});
　　$(".siderbar div").hover(function ()
　　{  
    $(this).addClass("active").siblings().removeClass("active");
　　　　 var index = $(this).index();
　　　　$(".slide-content-nav").children().eq(index).addClass("active")
　　　　.siblings().removeClass("active"); 
　　}); 
//轮播图左边
　　$(".title>span>span").click(function ()
　　{
　　　　$(this).addClass("active").siblings().removeClass("active");
　　　 var index = $(this).index();
　　　　$(this).parent().parent().siblings().children().eq(index).addClass("active")
　　　　.siblings().removeClass("active");
　　});
　　$(".title>span>span").hover(function ()
　　{ 
　　　　$(this).addClass("active").siblings().removeClass("active");
　　　 var index = $(this).index();
　　　　$(this).parent().parent().siblings().children().eq(index).addClass("active")
　　　　.siblings().removeClass("active");
　　});


}); 

$(function(){
    //轮播图右边
    $('.nav-right dl dd img').mouseenter(function(){   
        $(this).animate({left:'-5px'},500);   
    }); 
    $('.nav-right dl dd img').mouseleave(function(){   
        $(this).animate({left:'5px'},500);   
    }); 
     //狗狗主粮
    $('.cont div ul>li img').mouseenter(function(){   
        $(this).animate({top:'-5px'},500);   
    }); 
    $('.cont div ul>li img').mouseleave(function(){   
        $(this).animate({top:'5px'},500);   
    });  
    $('.cont-1-1 .cont-1-1-2 dd').mouseenter(function(){    
         $(this).animate({"background-position":"-6px",},500);
     });   
    $('.cont-1-1 .cont-1-1-2 dd').mouseleave(function(){ 
        $(this).animate({"background-position":"6px",},500);
    });  
    $('.cont-1-2>ol>li').mouseenter(function(){    
         $(this).animate({"background-position":"-6px",},500);
     });   
    $('.cont-1-2>ol>li').mouseleave(function(){ 
        $(this).animate({"background-position":"6px",},500);
    });  
    $('.cont-1-1-1').mouseenter(function(){    
         $(this).animate({"background-position":"-6px",},500);
     });   
    $('.cont-1-1-1').mouseleave(function(){ 
        $(this).animate({"background-position":"6px",},500);
    });  
 
 

});

$(function(){ 
    $('.slideRight>div').eq(1).mouseenter(function(){
        $('.slide-1').show();
    });
    $('.slideRight>div').eq(1).mouseleave(function(){
        $('.slide-1').hide();
    });
    $('.slideRight>div').eq(0).mouseenter(function(){
        $('.slide-2').show();
    });
    $('.slideRight>div').eq(0).mouseleave(function(){
        $('.slide-2').hide();
    });
    $('.slideRight>div').eq(3).mouseenter(function(){
        $('.slide-3').show();
    });
    $('.slideRight>div').eq(3).mouseleave(function(){
        $('.slide-3').hide();
    });
    $('.slideRight>div').eq(4).mouseenter(function(){
        $('.slide-4').show();
    });
    $('.slideRight>div').eq(4).mouseleave(function(){
        $('.slide-4').hide();
    });
});

// aria-label="Go to slide 8"
// var sw=document.querySelector('[aria-label="Go to slide 8"]');
/* var sw=document.querySelector('[class="swiper-pagination-bullet swiper-pagination-bullet-active"]');
console.log(sw["aria-label"]); */
 

// if()














