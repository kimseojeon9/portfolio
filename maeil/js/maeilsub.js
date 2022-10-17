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
        $("html, body").animate({ scrollTop: 0 }, 600);
    });



    // 스와이퍼
    var swiper = new Swiper(".thumb", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".mainSlide", {
        loop: true,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
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


