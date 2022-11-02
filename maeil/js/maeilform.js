var email = RegExp(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i);
var num = RegExp(/^(010|011|016|017|018|019)-[0-9]{3,4}-[0-9]{4}$/i);

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
    $(window).scroll(function () {
        if ($(this).scrollTop() < 100) {
            $(".aside").css({"opacity": "1", "transition": "all 0.5s ease"});
        } else {
            $(".aside").css({"opacity": "0", "transition": "all 0.5s ease"});
        }
    });

    // 탑 버튼
    $(".topbt").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });


    /* ------------------------컨텐츠 시작-------------------------- */

    // step eq
    $(".formBox .step ul li").click(function () {
        var stepIndex = $(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(".formBox .bwrap").eq(stepIndex).addClass("on").siblings().removeClass("on");
    });

    // 버튼 클릭 이벤트
    $(".formBox .box .content > div > ul li button").click(function (e) {
        $(this).addClass("on").parent().siblings().find('button').removeClass("on");
        // number에 on 지우고 값 초기화
        $("#number").removeClass('on').val('');
        e.preventDefault();
    });
    $(".amount #number").on("click mousedown keydown", function () {
        $(this).addClass("on").parent().siblings().children().removeClass("on");
    });

    // iput 숫자만 입력 or 콤마
    $("input#number").on("keyup", function () {
        $(this).val($(this).val().replace(/[^0-9]/g, "")); //숫자만 입력
    });

    // 다음 이전 버튼
    $(".formBox .bwrap .bt_wrap > .next").click(function () {
        var nextpage = $(this).index();
        $(".formBox .bwrap").eq(nextpage + 1).addClass("on").siblings().removeClass("on");
        $(".formBox .step ul li").eq(nextpage + 1).addClass("on").siblings().removeClass("on");
    });

    // 이전 버튼
    $(".formBox .bwrap.tres .bt_wrap > .prev").click(function () {
        var prevpage = $(this).index();
        $(".formBox .bwrap").eq(prevpage < 1).addClass("on").siblings().removeClass("on");
        $(".formBox .step ul li").eq(prevpage < 1).addClass("on").siblings().removeClass("on");
    });
    $(".formBox .bwrap.dos .bt_wrap > .prev").click(function () {
        var prevpage = $(this).index();
        $(".formBox .bwrap").eq(prevpage).addClass("on").siblings().removeClass("on");
        $(".formBox .step ul li").eq(prevpage).addClass("on").siblings().removeClass("on");
    });

    // 버튼 클릭시 탭 전환
    // 2 후원자 정보 구분 (개인 or 사업자)
    $(".bwrap.dos .content > div:first > ul li button").click(function () {
        $(this).addClass("on").parent().siblings().children().removeClass("on");
        $("#" + $(this).data("id")).addClass("on").siblings().removeClass("on");
    });
    // 3 결제수단 구분 (자동결제 or 카드결제)
    $(".bwrap.tres .content > div:first > ul li button").click(function () {
        $(this).addClass("on").parent().siblings().children().removeClass("on");
        $("#" + $(this).data("id")).addClass("on").siblings().removeClass("on");
    });
    // 3 예금주 구분 (개인or사업자)
    $(".bwrap.tres .content > div:nth-of-type(2) > div:nth-of-type(4) ul li button").click(function () {
        $(this).addClass("on").parent().siblings().children().removeClass("on");
        $("#" + $(this).data("id")).addClass("on").siblings().removeClass("on");
        return false;
    });


    // 빈값 체크
    $(".formBox .bwrap.dos .bt_wrap > .next").click(function () {
        // if문에서 2가지 길로 나눔, if/if
        // .dos가 아니고 .individual와 .group안의 폼들을 찾아서 빈값검사
        if($(".formBox .bwrap.dos #individual").hasClass('on')){
            var isRight = true;
            $(".formBox .bwrap.dos #individual").find("input[type=text], input[type=tel], input[type=password]").each(function (index, item) {
                if ($(this).val().trim() == '') {
                    alert($(this).attr("data-name") + " 항목을 입력하세요.");
                    isRight = false;
                    $(".formBox .bwrap").eq(1).addClass("on").siblings().removeClass("on");
                    $(".formBox .step ul li").eq(1).addClass("on").siblings().removeClass("on");
                    return false;
                }
            });
            if (!isRight) {
                return;
            }
            $(this).prop("disabled", true);
            $(this).prop("disabled", false);
            return false;
        };
        if($(".formBox .bwrap.dos #group").hasClass('on')){
            var isRight = true;
            $(".formBox .bwrap.dos #group").find("input[type=text], input[type=tel], input[type=password]").each(function (index, item) {
                if ($(this).val().trim() == '') {
                    alert($(this).attr("data-name") + " 항목을 입력하세요.");
                    isRight = false;
                    $(".formBox .bwrap").eq(1).addClass("on").siblings().removeClass("on");
                    $(".formBox .step ul li").eq(1).addClass("on").siblings().removeClass("on");
                    return false;
                }
            });
            if (!isRight) {
                return;
            }
            $(this).prop("disabled", true);
            $(this).prop("disabled", false);
            return false;
        };
    });

    //1 일시후원 클릭시 출금일 없애기
    $(".cycle button#keep").click(function () {
        $(".wdate").css({ "display": "flex" });
        var val = $(this).val();
        $("#cycle").text(val);
    });
    $(".cycle button#nokeep").click(function () {
        $(".wdate").css({ "display": "none" });
        var val = $(this).val();
        $("#cycle").text(val);
    });

    // 1 버튼 값 span에 넣기
    $('.amount button').on('click', function (e) {
        // console.log(e.target.value);
        var val = $(this).val();
        $("#amount").text(val);
    });
    $('#number').on('keyup', function (e) {
        console.log(e.target.value);
        var val = $(this).val();
        $("#amount").text(val);
        // $(this).val(addComma($(this).val().replace(/[^0-9]/g, ""))); //콤마
        // 문제점: 콤마가 안 생김......
    });
    // 1-1 5,000원 이하시 알림창
    $('#number').on('blur', function (e) {
        var val = $(this).val();
        var val2 = $('.amount button').val();
        console.log(val2)
        var comment = `한 어르신께 일주일간 안부를 묻기 위해 약 5,000원 이상의 후원금이 필요합니다.`;

        $(".formBox .bwrap .bt_wrap > .next").click(function(){
            if (val < 4900) {
                alert(comment);
                $(".formBox .bwrap").eq(0).addClass("on").siblings().removeClass("on");
                $(".formBox .step ul li").eq(0).addClass("on").siblings().removeClass("on");
            }
            else if (val2 >= 10000) {
                $(".formBox .bwrap").eq(1).addClass("on").siblings().removeClass("on");
                $(".formBox .step ul li").eq(1).addClass("on").siblings().removeClass("on");
            }
            else if (val >= 5000) {
                $(".formBox .bwrap").eq(1).addClass("on").siblings().removeClass("on");
                $(".formBox .step ul li").eq(1).addClass("on").siblings().removeClass("on");
            };
        });
        
    });

    //3 은행
    $.ajax({
        type: "GET",
        url: "/maeil/js/bank.json",
        dataType: "json",
        success: function (data) {
            var elem = "";
            // console.log(data);
            $.each(data, function (index, obj) {
                elem += `<option>${obj.name}</option>`;
            });
            $("#bank").append(elem);
        },
        error: function (xhr) {
            console.log(`${xhr.status}/${xhr.errorText}`);
        }
    });

    //3 popup 팝업 및 빈값 검사
    $(".formBox .bwrap.tres .bt_wrap > .submit").click(function () {

        // #auto - #individual2 - group2 / #credit
        if ($("#auto").hasClass('on') && $("#individual2").hasClass('on')) {
            console.log('통과')
            var isRight = true;
            $("#individual2").find("input[type=date]").each(function () {
                console.log('폼확인')
                if ($(this).val().trim() == '') {
                    console.log('빈값있음')
                    alert($(this).attr("data-name") + " 항목을 입력하세요.");
                    isRight = false;
                    return false;
                }
                console.log('빈값없음')
            });
            if (!isRight) {
                return;
            }
            $(this).prop("disabled", true);
            $(this).prop("disabled", false);
            $(".formBox .bwrap.tres .bt_wrap > .submit_pop").hide();
            $(".formBox .bwrap.tres .bt_wrap > .submit_pop").show();
            $(".formBox .bwrap.tres .bt_wrap > .submit_pop .submit_close").click(function () {
                $(".formBox .bwrap.tres .bt_wrap > .submit_pop").hide()
            });
            return false;
        };
        if ($("#auto").hasClass('on') && $("#group2").hasClass('on')) {
            var isRight = true;
            $("#group2").find("input").each(function (index, item) {
                if ($(this).val().trim() == '') {
                    alert($(this).attr("data-name") + " 항목을 입력하세요.");
                    isRight = false;
                    return false;
                }
            });
            if (!isRight) {
                return;
            }
            $(this).prop("disabled", true);
            $(this).prop("disabled", false);
            $(".formBox .bwrap.tres .bt_wrap > .submit_pop").hide();
            $(".formBox .bwrap.tres .bt_wrap > .submit_pop").show();
            $(".formBox .bwrap.tres .bt_wrap > .submit_pop .submit_close").click(function () {
                $(".formBox .bwrap.tres .bt_wrap > .submit_pop").hide()
            });
            return false;
        };
        if ($("#credit").hasClass('on')) {
            var isRight = true;
            $("#credit").find("input").each(function (index, item) {
                if ($(this).val().trim() == '') {
                    alert($(this).attr("data-name") + " 항목을 입력하세요.");
                    isRight = false;
                    return false;
                }
            });
            if (!isRight) {
                return;
            }
            $(this).prop("disabled", true);
            $(this).prop("disabled", false);
            $(".formBox .bwrap.tres .bt_wrap > .submit_pop").hide();
            $(".formBox .bwrap.tres .bt_wrap > .submit_pop").show();
            $(".formBox .bwrap.tres .bt_wrap > .submit_pop .submit_close").click(function () {
                $(".formBox .bwrap.tres .bt_wrap > .submit_pop").hide()
            });
            return false;
        };

        // 문제점: auto에서 input 두 번쨰까지만 추출 불가
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

    /* ----------------------체크박스------------------------ */

    //체크박스 구현
    // 전체 동의
    $('#admitAll').on('click', function () {
        var checked = $(this).is(':checked');
        if (checked) {
            $(this).closest('.admit_wrap').find('.check').prop('checked', true);
        } else {
            $(this).closest('.admit_wrap').find('.check').prop('checked', false);
        }
    });

    //하나 선택시 전체 동의 해제
    $('.admit_wrap .check').on('click', function () {
        var chkGroup = $(this).closest('.admit_wrap').find('.admit');
        var chkGroup_cnt = chkGroup.length;
        checked_cnt = $('.admit input:checkbox:checked').length;

        if (checked_cnt < chkGroup_cnt) {
            $('#admitAll').prop('checked', false);
        } else if (checked_cnt = 2) {
            $('#admitAll').prop('checked', true);
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


/* -------------------------------------------------- */

