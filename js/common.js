$(function(){
  //헤더 서치 ( meadiaQuery width 500px)
  $(".search").click(function(){
    if( window.matchMedia("(max-width: 500px)").matches ){
      if( $(this).hasClass("active") == false ){
        $(this).addClass("active");
        $(".m_search_bar").css({"visibility":"visible", "opacity":"1"});
      }else{
        $(this).removeClass("active");
        $(".m_search_bar").css({"visibility":"hidden", "opacity":"0"});
      }
    }else{
      if( $(this).hasClass("active") == false ){
        $(this).addClass("active");
        $(".page_title > .title").fadeOut()
        $(".search_header").fadeIn();
      }else{
        $(this).removeClass("active");
        $(".search_header").fadeOut();
        $(".page_title > .title").fadeIn()
      }
    }
  });

  //m_menu 구동
  $(".menu_btn").click(function(){
    $("#m_menu").fadeIn();
  });
  $(".m_close_btn > img").click(function(){
    $("#m_menu").fadeOut();
  });


  //메인 메뉴 배너 호버
  $(".hover_menu").mouseenter(function(){
    var imgNum = $(this).attr("data-imgNum");
    var imgCaption = $(this).attr("data-caption");
    $(".banner_img").attr("src","img/main/menu"+ imgNum +".jpg");
    $(".banner_caption").html(imgCaption);
  });

  $(".banner_img").mouseover(function(){
    $(this).css({"filter":"brightness(80%)", "-webkit-filter":"brightness(80%)"});
    $(this).next().css("color","#464646");
  }).mouseout(function(){
    $(this).css({"filter":"brightness(100%)", "-webkit-filter":"brightness(100%)"});
    $(this).next().css("color","#999999");
  });

 //img filter:brightness 효과
  $(".item img").mouseover(function(){
    $(this).css({"filter":"brightness(80%)", "-webkit-filter":"brightness(80%)"});
  }).mouseout(function(){
    $(this).css({"filter":"brightness(100%)", "-webkit-filter":"brightness(100%)"});
  });

});
