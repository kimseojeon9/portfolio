// 전체 페이지 버티컬 슬라이드
var swiper = new Swiper(".containner", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// 메인 슬라이드
var swiper = new Swiper(".slideWraper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 공간 소개 슬라이드
var swiper = new Swiper(".space_slide", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(document).ready(function () {
  // header
  $('.snb, .snbbg').slideUp(0);
  $('.gnb li').hover(function () {
    $('.snb, .snbbg').stop().slideDown('500');
  }, function () {
    $('.snb, .snbbg').stop().slideUp('500');
  });

  $('.mMenu').on('click', function () {
    $('.snb, .snbbg').show("fast");
  });

  // sec02 
  $('.title li').on('click', function () {
    $(this).addClass('on').siblings().removeClass('on');
  });

  // banners 
  $('banners div:gt(0)').hide();
  var totalNum = $(".banners>div").length;
  var currentNum = 1;
  $(".page_n>span:first").text(currentNum);
  $(".page_n>span:last").text(totalNum);

  $(".next_b").click(function () {
    currentNum++;
    if (currentNum > totalNum) {
      currentNum = 1;
    }
    $(".banners div:first").insertAfter(".banners div:last");
    $(".page_n>span:first").text(currentNum);
  });

  $(".prev_b").click(function () {
    currentNum--;
    if (currentNum < 1) {
      currentNum = totalNum;
    }
    $(".banners div:last").insertBefore(".banners div:first");
    $(".page_n>span:first").text(currentNum);
  });

});