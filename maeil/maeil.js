$(function () {

  // 헤더 메뉴
  var iw = window.innerWidth;
  if(iw > 1024) {
    $(".gnb .m").on("mouseenter focusin", function(){
      $("ul", this).slideDown();
      $(this).siblings("li").find("ul").hide();
      $(this).addClass("on").siblings("li").removeClass("on");
    }).on("mouseleave", function() {
      $(".gnb ul").hide().add(".gnb .m").removeClass("on");            
  });
  } else {
    $(".gnb .m").on("click", function(){
      $("ul", this).slideDown();
      $(this).siblings("li").find("ul").hide();
      $(this).addClass("on").siblings("li").removeClass("on");
      return false
    });
  }
  $("*:not(.gnb .m)").on("focus", function(){
    $(".gnb .m").hide().add(".gnb .m").removeClass("on");
  });


  // 비주얼 슬릭슬라이드
  $(".slide").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
  });

  // 브랜드 슬릭슬라이드
  $(".slide_brn").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });

  // 패밀리 사이트
  $(".site").click(function () {
    if ($(this).hasClass("on")) {
      $(this).add(".selectList").removeClass("on");
    } else {
      $(this).add(".selectList").addClass("on");
    }
    return false;
  });
  $("html").click(function(event){
    $(".site").add(".selectList").removeClass("on");
    event.stopPropagation();
});

});
