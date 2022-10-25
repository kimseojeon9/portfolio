// 유효성 검사
var email = RegExp(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i);
var num = RegExp(/^(010|011|016|017|018|019)-[0-9]{3,4}-[0-9]{4}$/i);

//콤마
function addComma(data) {
    return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

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


    /* ------------------------커스텀-------------------------- */

    // step eq
    $(".formBox .step ul li").click(function () {
        var stepIndex = $(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(".formBox .bwrap").eq(stepIndex).addClass("on").siblings().removeClass("on");
        return false;
    });

    // button click event
    $(".formBox .box .content > div > ul li button").click(function () {
        $(this).addClass("on").parent().siblings().children().removeClass("on");
    });

    $(".amount #number").on("click mousedown keydown", function () {
        $(this).addClass("on").parent().siblings().children().removeClass("on");
    });

    // iput 숫자만 입력 or 콤마
    $("input#number").on("keyup", function () {
        $(this).val($(this).val().replace(/[^0-9]/g, "")); //숫자만 입력
        $(this).val(addComma($(this).val().replace(/[^0-9]/g, ""))); //콤마
    });


    // 버튼 클릭시 탭 전환
    // 2 후원자 정보 구분
    $(".bwrap.dos .content > div:first > ul li button").click(function () {
        $(this).addClass("on").parent().siblings().children().removeClass("on");
        $("#" + $(this).data("id")).addClass("on").siblings().removeClass("on");
    });
    // 3 결제수단 구분
    $(".bwrap.tres .content > div:first > ul li button").click(function () {
        $(this).addClass("on").parent().siblings().children().removeClass("on");
        $("#" + $(this).data("id")).addClass("on").siblings().removeClass("on");
    });
    // 3 예금주 구분
    $(".bwrap.tres .content > div:nth-of-type(2) > div:nth-of-type(4) ul li button").click(function () {
        $(this).addClass("on").parent().siblings().children().removeClass("on");
        $("#" + $(this).data("id")).addClass("on").siblings().removeClass("on");
    });



    // next prev
    $(".formBox .bwrap .bt_wrap > .next").click(function () {
        var nextpage = $(this).index();
        $(".formBox .bwrap").eq(nextpage + 1).addClass("on").siblings().removeClass("on");
        $(".formBox .step ul li").eq(nextpage + 1).addClass("on").siblings().removeClass("on");
    });

    $(".formBox .bwrap .bt_wrap > .prev").click(function () {
        var prevpage = $(this).index();
        $(".formBox .bwrap").eq(prevpage < 1).addClass("on").siblings().removeClass("on");
        $(".formBox .step ul li").eq(prevpage < 1).addClass("on").siblings().removeClass("on");
    });


    //3 popup
    $(".formBox .bwrap .bt_wrap > .submit").click(function () {
        $(".submit_pop").show();
    });
    $(".submit_close").click(function () {
        $(".submit_pop").hide();
    });



    /* ----------------------유효성 검사---------------------------- */

    $("#num01").blur(function () {
        //전화번호 공백 검사
        if ($("#num01").val() == "") {
            $("#numlog01").text("*전화번호를 입력하세요");
            $("#num01").focus();
            return false;
        }
        //전화번호 유효성 검사
        else if (!num.test($("#num01").val())) {
            $("#numlog01").text("*올바른 전화번호가 아닙니다. 다시 입력해 주세요.");
            // $("#email").val("");
            $("#num01").focus();
            return false;
        } else { // 서로 맞는경우
            $("#numlog01").text("");
        }
    });

    $("input:text[id*=email0]").blur(function () {
        //이메일 공백 검사
        if ($("#email01").val() == "") {
            $("#emaillog01").text("*이메일을 입력하세요");
            $("#email01").focus();
            return false;
        }
        //이메일 유효성 검사
        else if (!email.test($("#email01").val())) {
            $("#emaillog01").text("*이메일 형식에 맞게 입력해주세요");
            // $("#email").val("");
            $("#email01").focus();
            return false;
        } else { // 서로 맞는경우
            $("#emaillog01").text("");
        }
    });

    // --------------------------
    $("#num02").blur(function () {
        //전화번호 공백 검사
        if ($("#num02").val() == "") {
            $("#numlog02").text("*전화번호를 입력하세요");
            $("#num02").focus();
            return false;
        }
        //전화번호 유효성 검사
        else if (!num.test($("#num02").val())) {
            $("#numlog02").text("*올바른 전화번호가 아닙니다. 다시 입력해 주세요.");
            // $("#email").val("");
            $("#num02").focus();
            return false;
        } else { // 서로 맞는경우
            $("#numlog02").text("");
        }
    });

    $("#email02").blur(function () {
        //이메일 공백 검사
        if ($("#email02").val() == "") {
            $("#emaillog02").text("*이메일을 입력하세요");
            $("#email02").focus();
            return false;
        }
        //이메일 유효성 검사
        else if (!email.test($("#email02").val())) {
            $("#emaillog02").text("*이메일 형식에 맞게 입력해주세요");
            // $("#email").val("");
            $("#email02").focus();
            return false;
        } else { // 서로 맞는경우
            $("#emaillog02").text("");
        }
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


