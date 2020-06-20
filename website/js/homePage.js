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
  $('.swiper-pagination-bullet').hover( function(){clearIterval(timer2)}, function(){timer2=setInterval(tu,3000);} )
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

//











