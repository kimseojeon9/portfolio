$(function () {

  // 헤더
  $(".gnb").on("mouseenter focusin", function () {
    $(".gnb>div>span").on("focusin click", function () {
      $(this).addClass("on").siblings().removeClass("on");
      $("#" + $(this).data("id")).addClass("on").siblings().removeClass("on");
      $(".subGnb").addClass("on");
    });
  });

  $("#sub06 li:last a").on("focusout", function () {
    $(".subGnb").removeClass("on");
  });

  // 모바일 헤더
  if ($(window).width() < 1024) {
    $(".mMenu").click(function () {
      $(".gnb").addClass("on");
    });
    $(".mClose").click(function () {
      $(".gnb").removeClass("on");
    });
  }


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
  $("html").click(function (event) {
    $(".site").add(".selectList").removeClass("on");
    event.stopPropagation();
  });

  // 스크롤 이벤트
  $(window).scroll(function () {
    if ($(this).scrollTop() > 750) {
      $(".topbt").addClass("on");
    } else {
      $(".topbt").removeClass("on");
    }
  });
  // 탑 버튼
  $(".topbt").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
  });
});

// 리사이징
$(window).resize(function () {
  if ($(window).width() < 1024) {
    $(".mMenu").click(function () {
      $(".gnb").addClass("on");
    });
    $(".mClose").click(function () {
      $(".gnb").removeClass("on");
    });
  }

});
