
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
        if ($(this).scrollTop() > 75) {
            $(".topbt").addClass("on");
        } else {
            $(".topbt").removeClass("on");
        }
    });

    // 탑 버튼
    $(".topbt").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });

    
    // 탭구조
    $(".con2 .sec2 .tab ul li:first").show().addClass("on"); // 첫째 탭 show
    $(".con2 .sec2 .container .content:first").show(); // 첫째 창 show
    
    $(".con2 .sec2 .tab ul li").click(function () {
        var tabIndex = $(this).index();
        console.log(tabIndex);
        $(this).addClass("on").siblings().removeClass("on");
        $(".con2 .sec2 .container .content").eq(tabIndex).addClass("on").siblings().removeClass("on");
        return false;
    });

});

/* -------------------------------------------------- */

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

/* -------------------------------------------------- */

// 스와이퍼1
var swiper1 = new Swiper(".t01", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    observer: true,
    observeParents: true,
    //탭안의 스와이퍼 갱신, ie11부터 가능,
});
new Swiper(".m01", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper1,
    },
    observer: true,
    observeParents: true,
    //탭안의 스와이퍼 갱신, ie11부터 가능,
});
// 스와이퍼2
var swiper2 = new Swiper(".t02", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    observer: true,
    observeParents: true,
    //탭안의 스와이퍼 갱신, ie11부터 가능,
});
new Swiper(".m02", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper2,
    },
    observer: true,
    observeParents: true,
    //탭안의 스와이퍼 갱신, ie11부터 가능,
});
// 스와이퍼3
var swiper3 = new Swiper(".t03", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    observer: true,
    observeParents: true,
    //탭안의 스와이퍼 갱신, ie11부터 가능,
});
new Swiper(".m03", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper3,
    },
    observer: true,
    observeParents: true,
    //탭안의 스와이퍼 갱신, ie11부터 가능,
});
// 스와이퍼4
var swiper4 = new Swiper(".t04", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    observer: true,
    observeParents: true,
    //탭안의 스와이퍼 갱신, ie11부터 가능,
});
new Swiper(".m04", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper4,
    },
    observer: true,
    observeParents: true,
    //탭안의 스와이퍼 갱신, ie11부터 가능,
});
// 스와이퍼5(오토)
var swiper = new Swiper(".milkSlide", {
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
    observer: true,
    observeParents: true,
  });
