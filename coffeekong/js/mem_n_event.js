// 정규식, 유효성 검사
var email = RegExp(/^[a-z0-9.]{4,12}$/); // 마침표 허용 4~12자리
var id = RegExp(/^[A-Za-z0-9_.]{4,10}$/); // 언더바, 마침표 허용 4~10자리
var pw = RegExp(/^[a-z0-9#?!@$%^&*-](?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])[a-z0-9#?!@$%^&*-]{5,10}$/); // 영문 포함 + 숫자 포함 + 특수문자 + 길이 5~10자리 사이 문자열(반드시 모두 포함)

$(function () {
    //header
    // 로그인 토글
    $('.id').click(function () {
        $('.login_form').toggle('slow');
        $('.login_form').css({ display: 'flex' });
        if ($('#id, #password').focusin()) {
            console.log("이벤트 감지");
            $('.id').off('click');
        } 
        // 기본적인 토글은 됐으면 좋겠는데 off() 때문에 뻐김
        // else if ($(this).focusout()) {
        //     console.log("커서 나감");
        //     $('.login_form').toggle('slow');
        //     $('.login_form').css({ display: 'none' });
        // }
    });
    // 모바일 헤더 
    if ($(window).width() < 1025) {
        $('.out').hide();
        $('.mb').click(function () {
            $('.gnb').toggle('slow')
        });
    }

    // --- membership form 시작 --- //
    // 1. 이메일
    $('#emails').change(function () {
        $("#emails option:selected").each(function () {
            if ($(this).val() == 'select') {
                $("#email02").val('');
                $("#email02").attr("disabled", false);
            } else {
                $("#email02").val($(this).text());
                $("#email02").attr("disabled", true);
            }
        });
    });

    // 2. 빈값 검사, 유효성 검사
    $('#mem_submit').click(function () {
        // email
        $('.email_wrap').find('input[type=text]').each(function (index, item) {
            if ($(this).val().trim() == '') {
                console.log("null email");
                $('.error em').css({ display: 'block' });
                $('.error em').hide();
                $('.null_em').show();
                return false;
            } else if (!email.test($('#email01').val().trim())) {
                console.log('유효하지 않은 이메일입니다.')
                $('.error.em').css({ display: 'block' });
                $('.error em').show();
                $('.null_em').hide();
                return false;
            } else if (!email.test($('#email02').val().trim())) {
                console.log('유효하지 않은 이메일입니다.')
                $('.error.em').css({ display: 'block' });
                $('.error em').show();
                $('.null_em').hide();
                return false;
            } else {
                $('.error.em').hide();
                $('.null_em').hide();
            }
        });
        // id
        $('.id_info').find('#n_id').each(function (index, item) {
            if ($(this).val().trim() === '') {
                console.log("null id");
                $('.error id').css({ display: 'block' });
                $('.error id').hide();
                $('.null_id').show();
                return false;
            } else if (!id.test($('#n_id').val().trim())) {
                console.log('유효하지 않은 아이디입니다.')
                $('.error.id').css({ display: 'block' });
                $('.null_id').hide();
                $('.error id').show();
                return false;
            } else {
                $('.error.id').hide();
                $('.null_id').hide();
            }

        });
        // pw
        $('.pw_info').find('input[type=password]').each(function (index, item) {
            if ($(this).val().trim() == '') {
                console.log("null pw");
                $('.error pw').css({ display: 'block' });
                $('.error pw').hide();
                $('.null_pw').show();
                return false;
            } else if (!pw.test($('#n_pw').val())) {
                console.log('유효하지 않은 비밀번호입니다.')
                $('.error.pw').css({ display: 'block' });
                $('.null_pw').hide();
                $('.error pw').show();
                return false;
            } else {
                $('.error.pw').hide();
                $('.null_pw').hide();
            }
        });

    })


    // --------------------- //

    // 게시판 시작 //

    // 탭
    $('.type_bt').click(function (){

        $(this).addClass('on').siblings().removeClass('on');

        if ($(this).eq(0).addClass('on')) {
            $('tr.table.ntc, tr.table.vnt').css({display: "table-row"});
        } 
    })
    // 전체 공지
    if ($('.all').eq(0).addClass('on')) {
        $('tr.table.ntc, tr.table.vnt').css({display: "table-row"});
    }
    // 공지
    $('.type_bt.ntc').click(function (){

        var tr_ntc = $('table').find('tr.table.ntc');
        var leng01 = tr_ntc.length;

        for (var i = 0; i < leng01; i++) {
            console.log(tr_ntc[i])
        }

        $(tr_ntc).css({display: "table-row"}).siblings('tr.table.vnt').css({display: "none"});
        
    })
    // 이벤트
    $('.type_bt.vnt').click(function (){

        var tr_vnt = $('table').find('tr.table.vnt');
        var leng02 = tr_vnt.length;
    
        for (var i = 0; i < leng02; i++) {
            console.log(tr_vnt[i])
        }
        
        $(tr_vnt).css({display: "table-row"}).siblings('tr.table.ntc').css({display: "none"});

    })

});

/* ------------------------- */

// 리사이징
$(window).resize(function () {
    if ($(window).width() < 1025) {
        $('.out').hide();
    }
});

var lastWidth = $(window).width();
$(window).resize(function () {
    if ($(window).width() != lastWidth) {
        location.reload(); // 파이어폭스에서 리프레시 안됨
        window.location = window.location; // 리프레시 파이어폭스 브라우저 이슈 해결
        lastWidth = $(window).width();
        return false;
    }
});