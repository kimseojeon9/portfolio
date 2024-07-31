/* 제품 검색 & 제품 상세 */

$(function () {
    // header
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

    // -------- swiper --------- //
    // 제품 사진
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 4,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        spaceBetween: 4,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
    
    // 탑 버튼
    $(".go_up").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 300);
    });

    // 상세 네비 스크롤 이동
    $(".scroll_move").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(".review_tab").offset().top-81}, 300);
    });
    
    // 상세 내용 접기 시 스크롤 이동
    $(".less").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(".goods_nav").offset().top-81}, 300);
    });

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



document.addEventListener('DOMContentLoaded', function () { //DOM 생성 후 이벤트 리스너 등록    

    //더 보기 버튼 이벤트 리스너    
    document.querySelector('.more').addEventListener('click', function (e) {
        // 더 보기 프레임의 클래스 정보 얻기        
        let classList = document.querySelector('.goods_detail').classList; 
        // 컨텐츠 높이 얻기
        let contentHeight = document.querySelector('.goods_detail').offsetHeight;  

        // 2단계이면 전체 보기로        
        if (classList.contains('cut02')) {
            classList.remove('cut02');
        }

        // 1단계이면 2단계로        
        if (classList.contains('cut01')) {
            classList.remove('cut01');
            if (contentHeight > 600) {
                classList.add('cut02');
            } else {
                document.querySelector('.more').classList.add('hide');
            }
        }

        //전체보기 시 더 보기 버튼 감추기 & 감추기 버튼 표시        
        if (!classList.contains('cut01') && !classList.contains('cut02')) {
            e.target.classList.add('hide');
            document.querySelector('.less').classList.remove('hide');
        }
    });
});

// 감추기 버튼 이벤트 리스너
document.querySelector('.less').addEventListener('click', function (e) {
    e.target.classList.add('hide');
    // 더 보기 버튼 감춤   
    document.querySelector('.more').classList.remove('hide');
    // 초기 감춤 상태로 복귀
    document.querySelector('.goods_detail').classList.add('cut01');
});