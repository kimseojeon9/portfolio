$(function (){
  // sec01 슬릭 슬라이드
  $('.visual_slide').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });

    //header
    // 로그인 토글
    $('.id').click(function(){
      $('.login_form').toggle('slow');
      $('.login_form').css({display: 'flex'});
    })

    $('.login_form > input').click(function(){
      console.log("이벤트 감지");
      $('.login_form').show();
    })

    if ($(window).width() < 1025) {
      $('.out').hide();
      $('.mb').click(function(){
        $('.gnb').toggle('slow')
      });
    }
    
    // 반응형
    if ($(window).width() < 767) {
      $('.product').addClass('single-item');
      // $('.single-item').slick();
    }; 
    
    var screenWidth = $(window).width();
    var screenHeight = $(window).height();
  
    // console.log("화면 너비: " + screenWidth);
    // console.log("화면 높이: " + screenHeight);
  
    // sec02 베스트 1
    if ($('.best_one').mouseenter(function(){
      $('.best_one').addClass('on');
      $('.best_one.on').show();
      $('<a href="#" class="learnMore one"></a>').prependTo('.best_one.on').css({display: "block"});
      $('<a href="#" class="favorite one"></a>').appendTo('.best_one.on').css({display: "block"});
      $('.best_one_link').css({width: "0", height: "0"})
      if($('.best_one').mouseleave(function(){
        $('.best_one').removeClass('on');
        $('.learnMore').css({display: "none"});
        $('.favorite').css({display: "none"});
      }));
    }));
    // 베스트 2
    if ($('.best_two').mouseenter(function(){
      $('.best_two').addClass('on');
      $('.best_two.on').show();
      $('<a href="#" class="learnMore two"></a>').prependTo('.best_two.on').css({display: "block"});
      $('<a href="#" class="favorite two"></a>').appendTo('.best_two.on').css({display: "block"});
      $('.best_two_link').css({width: "0", height: "0"})
      if($('.best_two').mouseleave(function(){
        $('.best_two').removeClass('on');
        $('.learnMore').css({display: "none"});
        $('.favorite').css({display: "none"});
      }));
    }));
    // 베스트 3
    if ($('.best_three').mouseenter(function(){
      $('.best_three').addClass('on');
      $('.best_three.on').show();
      $('<a href="#" class="learnMore three"></a>').prependTo('.best_three.on').css({display: "block"});
      $('<a href="#" class="favorite three"></a>').appendTo('.best_three').css({display: "block"});
      $('.best_three_link').css({width: "0", height: "0"})
      if($('.best_three').mouseleave(function(){
        $('.best_three').removeClass('on');
        $('.learnMore').css({display: "none"});
        $('.favorite').css({display: "none"});
      }));
    }));
    // 최적화 필요(간결히)
    
});
  
// sec03 제품 컴포넌트
$.ajax({
  type: "GET",
  url: "/coffeekong/js/product.json",
  dataType: "json",
  success: function (data) {
    var elem = "";
    // console.log(data);
    $.each(data, function(i, obj){
      elem += `<div class="product" tabindex="0">`
        elem += `<div class="pic">`
          elem += `<img src="${obj.img.imgUrl}" onclick="location.href='${obj.img.url}'" alt="${obj.img.imgAlt}">`
        elem += `</div>`
        elem += `<div class="textBox">`
          elem += `<a href="#">`
            elem += `<p class="store">${obj.textBox.store}</p>`
            elem += `<p class="p_name">${obj.textBox.p_name}</p>`
            elem += `<p class="price">${obj.textBox.price}</p>`
          elem += `</a>`
        elem += `</div>`
      elem += `</div>`
    });
    $('.p_wrap').prepend(elem);
  },
  error: function(xhr) {
    console.log(`${xhr.status}/${xhr.errorText}`);
  }
});