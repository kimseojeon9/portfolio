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

  // 반응형
  if ($(window).width() <= 1024) {
    $(".gnb ul").hide();
    $(".mMenu").click(function () {
      $(".gnb ul").show();
    });
    $(".mClose").click(function () {
      $(".gnb ul").hide();
    });
    $('.poster').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  }
  if ($(window).width() <= 640) {
    $(".mMenu").click(function () {
      $(".gnb ul").show();
      $('.gnb ul .snb').hide();
    });
    $('.gnb ul li').on('click', function () {
      $(this).find('ul').show();
      $(this).find('ul').stop().slideToggle();
    });
  }

  // sec02 
  $('.title li').on('click', function () {
    $(this).addClass('on').siblings().removeClass('on');
  });

  // banners 
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

// 리사이징
$(window).resize(function () {
  if ($(window).width() < 1024) {
    $('.gnb > ul').hide();
    $('.mMenu').on('click', function () {
      $('.gnb > ul, .snb, .snbbg').show();
    });
    $('.mClose').on('click', function () {
      $('.gnb > ul, .snb, .snbbg').hide();
    });
  };
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

// 공고 게시판
/* ------------class------------ */
class NoticeInfo {
  constructor(type, days, info) {
    this.type = type;
    this.days = days;
    this.info = info;
  }
  infoT() {
    return `${this.type}`;
  }
  infoD() {
    return `${this.days}`;
  }
  infoI() {
    return `${this.info}`;
  }
}
/* ------------map------------ */
// 일반공고
var nomal = new Map();
nomal.set(221115, new NoticeInfo('일반공고', '2022-11-15', '2022 김수현드라마아트홀 「스크린 속 김수현을 만나다」 특별상영 관람객 모집'));
nomal.set(221115.2, new NoticeInfo('일반공고', '2022-11-15', '2022 김수현드라마아트홀 「타닥타닥 감성 피우기」 체험 프로그램 안내'));
nomal.set(221112, new NoticeInfo('일반공고', '2022-11-12', '2022년 제4차 청주첨단문화산업단지 기간연장 및 공간변경 기업 신청 공고'));
nomal.set(221111, new NoticeInfo('일반공고', '2022-11-11', '「2022 청주영상주간」 프로그램 및 사전 예약 안내'));
nomal.set(221031, new NoticeInfo('일반공고', '2022-10-31', '2022 문화파출소 청원 &lt;四時사천 원데이클래스-겨울편&gt; 수강생 모집'));
nomal.set(221027, new NoticeInfo('일반공고', '2022-10-18', '2023 청주국제공예공모전 요강 발표'));
nomal.set(220920, new NoticeInfo('일반공고', '2022-09-20', '문화파출소 청원 <四時사천 원데이클래스-가을편> 수강생 모집'));
nomal.set(220915, new NoticeInfo('일반공고', '2022-09-15', '김수현드라마아트홀 「드라마로 소통하다」 노희경 작가 특강 참여자 모집(마감)'));
nomal.set(220914, new NoticeInfo('일반공고', '2022-09-14', '무단방치 자전거 처분공고'));
nomal.set(220910, new NoticeInfo('일반공고', '2022-09-10', '한국공예관 2022 생활공예클래스 하반기 수강생 모집'));
nomal.set(220906, new NoticeInfo('일반공고', '2022-09-06', '찾아가는 케이녹 투자유치 상담회 “KNock STATION X 충북 : 에듀테크" 참여자 모집'));
nomal.set(220902, new NoticeInfo('일반공고', '2022-09-02', '한국공예관 뮤지엄숍 추석맞이 할인&사은 행사 안내(9/3~9/30)'));
nomal.set(220831, new NoticeInfo('일반공고', '2022-08-31', '[(재)청주시문화산업진흥재단] <소소한 동네 문제 해결단> 모집'));
nomal.set(220831.2, new NoticeInfo('일반공고', '2022-08-31', '동부창고 카페C 9/2(금) 영업시간 단축 운영 안내'));

// 지원사업공고
var volun = new Map();
volun.set(221018, new NoticeInfo('지원사업공고', '2022-10-18', '[한국공예관] 2022 문화상품 공모전(~11/21)'));
volun.set(220908, new NoticeInfo('지원사업공고', '2022-09-08', '2022 충북콘텐츠코리아랩 예비창업자 대상 콘텐츠 시제품 제작지원 사업 연장공고(~10/4)'));
volun.set(220906, new NoticeInfo('지원사업공고', '2022-09-06', '2022 동부창고 예술교육 매개자 워크숍 <몸짓 실험실> 참여 예술가 모집'));
volun.set(220901, new NoticeInfo('지원사업공고', '2022-09-01', '2022 충북글로벌게임센터 [인디 스타트업 창업지원] 예비창업자 모집 공고'));
volun.set(220831, new NoticeInfo('지원사업공고', '2022-08-31', '[(재)청주시문화산업진흥재단] <소소한 동네 문제 해결단> 모집 공고'));
volun.set(220826, new NoticeInfo('지원사업공고', '2022-08-26', '2022 충북글로벌게임센터 [글로벌 게임전시회 참가 지원사업] 참가기업 모집공고'));
volun.set(220812, new NoticeInfo('지원사업공고', '2022-08-12', '2022 충북글로벌게임센터 [게임 인턴십 지원사업] 2차 참여인턴 모집공고'));
volun.set(220810, new NoticeInfo('지원사업공고', '2022-08-10', '[한국공예관] 뮤지엄숍 하반기 입점 기념 공예&문화상품 특별할인전(8/11~8/25)'));
volun.set(220805, new NoticeInfo('지원사업공고', '2022-08-05', '2[한국공예관] 2022 공예문화상품 개발 공모 수상자 발표'));
volun.set(220727, new NoticeInfo('지원사업공고', '2022-07-27', '[2차 모집 마감] 2022 같이하는 가치펀딩 지원사업 공고 (종료)'));

// 채용공고
var job = new Map();
job.set(221116, new NoticeInfo('채용공고', '2022-11-16', '기간제근로자 채용 면접전형 합격자 공고(미화)'));
job.set(221109, new NoticeInfo('채용공고', '2022-11-09', '기간제근로자 채용 서류전형 합격자 공고(미화)'));
job.set(221102, new NoticeInfo('채용공고', '2022-11-02', '기간제근로자 채용 면접전형 합격자 공고(충북글로벌게임센터)'));
job.set(221027, new NoticeInfo('채용공고', '2022-10-27', '기간제근로자 채용 서류전형 합격자 공고(충북글로벌게임센터)'));
job.set(221025, new NoticeInfo('채용공고', '2022-10-25', '(재)청주시문화산업진흥재단 기간제근로자 채용 재공고(장애인 제한경쟁)'));
job.set(221024, new NoticeInfo('채용공고', '2022-10-24', '(재)청주시문화산업진흥재단 대표이사 공개모집 임명예정자(최종합격자) 공고'));
job.set(221011, new NoticeInfo('채용공고', '2022-10-11', '(재)청주시문화산업진흥재단 기간제근로자 채용 공고(충북글로벌게임센터)'));
job.set(221005, new NoticeInfo('채용공고', '2022-10-05', '(재)청주시문화산업진흥재단 대표이사 공개모집 서류심사 합격자 공고'));
job.set(221004, new NoticeInfo('채용공고', '2022-10-04', '(재)청주시문화산업진흥재단 기간제근로자 채용 공고(장애인 제한경쟁)'));
job.set(220908, new NoticeInfo('채용공고', '2022-09-08', '(재)청주시문화산업진흥재단 상근임원(대표이사) 모집 공고'));
job.set(220829, new NoticeInfo('채용공고', '2022-08-29', '기간제근로자 채용 면접전형 합격자 공고(동부창고)'));
job.set(220825, new NoticeInfo('채용공고', '2022-08-25', '(재)청주시문화산업진흥재단 일반직(정규직) 채용 최종합격자 공고'));
job.set(220822, new NoticeInfo('채용공고', '2022-08-22', '기간제근로자 채용 서류전형 합격자 공고(동부창고)'));

// 입찰공고
var bid = new Map();
bid.set(220824, new NoticeInfo('입찰공고', '2022-08-24', '[제2022-32호] 2022 충북글로벌게임센터 테스트베드 운영 장비 구매(모바일 기기, PC, 복합기)(2인 이상 견적제출 공고)'));
bid.set(220607, new NoticeInfo('입찰공고', '2022-06-07', '[제2022-31호] 2022 청주 문화도시조성사업 시민 자율예산제-시민 참여형 운영 용역(협상에 의한 계약)'));
bid.set(220531, new NoticeInfo('입찰공고', '2022-05-31', '[제2022-30호] 2022 충북글로벌게임센터 충북 게임잼 사업 운영 용역(협상에 의한 계약)'));
bid.set(220527, new NoticeInfo('입찰공고', '2022-05-27', '[제2022-29호] 2022 충북콘텐츠코리아랩 온라인마켓 진출 지원사업 운영 용역(협상에 의한 계약)'));
bid.set(220524, new NoticeInfo('입찰공고', '2022-05-24', '[제2022-28호] 청주 기록문화 실태 조사·분석 및 2022년 청주 문화도시조성사업 성과관리 용역 입찰 공고(협상에 의한 계약)'));
bid.set(220520, new NoticeInfo('입찰공고', '2022-05-20', '[제2022-27호] 2022 청주 문화도시조성사업 청주 시민기록관 전시 기획·설계 및 전시물 제작·설치 용역 입찰 공고(협상에 의한 계약)(2022. 6. 2. 변경)'));
bid.set(220511, new NoticeInfo('입찰공고', '2022-05-11', '[제2022-26호] 2022 청주 문화도시조성사업 청년문화창작소 느티 공간 운영 용역 입찰 재공고(협상에 의한 계약)'));
bid.set(220511.2, new NoticeInfo('입찰공고', '2022-05-11', '[제2022-25호] 2022 충북글로벌게임센터 지스타 2022 충북공동관 구축·운영 용역 입찰 재공고(협상에 의한 계약)'));

// 결과발표
var result = new Map();
result.set(220923, new NoticeInfo('결과발표', '2022-09-23', '2022 충북글로벌게임센터 [인디 스타트업 창업지원] 예비창업자 선정평가 결과 안내'));
result.set(220920, new NoticeInfo('결과발표', '2022-09-20', '2022 충북글로벌게임센터 [글로벌 게임전시회 참가지원] 게임기업 선정평가 결과안내'));
result.set(220908, new NoticeInfo('결과발표', '2022-09-08', '청주첨단문화산업단지 2022년 제3차 입주기업 기간연장·공간변경 심사 결과'));
result.set(220803, new NoticeInfo('결과발표', '2022-08-03', '2022 충북글로벌게임센터 [게임 상용화 지원] 2차 게임기업 선정평가 결과 안내'));
result.set(220803.2, new NoticeInfo('결과발표', '2022-08-03', '2022 충북글로벌게임센터 [인디 스타트업 제작지원] 중간평가 결과 안내'));
result.set(220803, new NoticeInfo('결과발표', '2022-08-03', '2022 충북글로벌게임센터 [충북 게임기업 제작지원] 중간평가 결과'));
result.set(220725, new NoticeInfo('결과발표', '2022-07-25', '2022 청주 문화도시조성사업 <시민 자율예산제>-[시민제안형] 심의 결과 발표'));
result.set(220701, new NoticeInfo('결과발표', '2022-07-01', '청주첨단문화산업단지 2022년 제2차 기간연장·공간변경 입주기업 심사 결과'));

// 전체
var all = [];
all.push(nomal, volun, job, bid, result);

let nomalV = [...nomal.values()]; 
let volunV = [...volun.values()]; 
let jobV = [...job.values()]; 
let bidV = [...bid.values()]; 
let resultV = [...result.values()]; 

// console.log(nomalV[0]);
// console.log(nomalV[0].type);
// console.log(nomal.values().next().value.infoI());

/* ----------함수--------- */
function createNoticeInfo01(index) {
  var a = document.createElement('a');
  // span 01
  function makeSpanTop(index) {
    let span = document.createElement('span');
    
    let strong = document.createElement('strong');
    let strongTxt = document.createTextNode(nomalV[index].type);
    
    let em = document.createElement('em');
    let emTxt = document.createTextNode(nomalV[index].days);
    
    strong.appendChild(strongTxt);
    em.appendChild(emTxt);
    
    strong.classList.add('nomal');
    span.classList.add('top');
    span.appendChild(strong);
    span.appendChild(em);
    a.appendChild(span)
  }
  // span 02
  function makeSpanBottom(index) {
    let span = document.createElement('span');
    let spanTxt = document.createTextNode(nomalV[index].info);
    span.appendChild(spanTxt);
    a.appendChild(span)
  }
  makeSpanTop(index);
  makeSpanBottom(index);

  // a에 집어넣기
  let block = document.querySelector(".contents")
  block.appendChild(a)
};
function createNoticeInfo02(index) {
  var div = document.createElement('div');
  var a = document.createElement('a');
  function makeSpanTop(index) {
    let span = document.createElement('span');

    let strong = document.createElement('strong');
    let strongTxt = document.createTextNode(volunV[index].type);
    
    let em = document.createElement('em');
    let emTxt = document.createTextNode(volunV[index].days);
    
    strong.appendChild(strongTxt);
    em.appendChild(emTxt);
    
    strong.classList.add('volun');
    span.classList.add('top');
    span.appendChild(strong);
    span.appendChild(em);
    a.appendChild(span)
  }
  function makeSpanBottom(index) {
    let span = document.createElement('span');
    let spanTxt = document.createTextNode(volunV[index].info);
    span.appendChild(spanTxt);
    a.appendChild(span)
  }
  makeSpanTop(index);
  makeSpanBottom(index);
  let block = document.querySelector(".contents")
  block.appendChild(a)
};
function createNoticeInfo03(index) {
  var div = document.createElement('div');
  var a = document.createElement('a');
  function makeSpanTop(index) {
    let span = document.createElement('span');

    let strong = document.createElement('strong');
    let strongTxt = document.createTextNode(jobV[index].type);
    
    let em = document.createElement('em');
    let emTxt = document.createTextNode(jobV[index].days);
    
    strong.appendChild(strongTxt);
    em.appendChild(emTxt);
    
    strong.classList.add('job');
    span.classList.add('top');
    span.appendChild(strong);
    span.appendChild(em);
    a.appendChild(span)
  }
  function makeSpanBottom(index) {
    let span = document.createElement('span');
    let spanTxt = document.createTextNode(jobV[index].info);
    span.appendChild(spanTxt);
    a.appendChild(span)
  }
  makeSpanTop(index);
  makeSpanBottom(index);
  let block = document.querySelector(".contents")
  block.appendChild(a)
};
function createNoticeInfo04(index) {
  var div = document.createElement('div');
  var a = document.createElement('a');
  function makeSpanTop(index) {
    let span = document.createElement('span');

    let strong = document.createElement('strong');
    let strongTxt = document.createTextNode(bidV[index].type);
    
    let em = document.createElement('em');
    let emTxt = document.createTextNode(bidV[index].days);
    
    strong.appendChild(strongTxt);
    em.appendChild(emTxt);
    
    strong.classList.add('bid');
    span.classList.add('top');
    span.appendChild(strong);
    span.appendChild(em);
    a.appendChild(span)
  }
  function makeSpanBottom(index) {
    let span = document.createElement('span');
    let spanTxt = document.createTextNode(bidV[index].info);
    span.appendChild(spanTxt);
    a.appendChild(span)
  }
  makeSpanTop(index);
  makeSpanBottom(index);
  let block = document.querySelector(".contents")
  block.appendChild(a)
};
function createNoticeInfo05(index) {
  var div = document.createElement('div');
  var a = document.createElement('a');
  function makeSpanTop(index) {
    let span = document.createElement('span');

    let strong = document.createElement('strong');
    let strongTxt = document.createTextNode(resultV[index].type);
    
    let em = document.createElement('em');
    let emTxt = document.createTextNode(resultV[index].days);
    
    strong.appendChild(strongTxt);
    em.appendChild(emTxt);
    
    strong.classList.add('result');
    span.classList.add('top');
    span.appendChild(strong);
    span.appendChild(em);
    a.appendChild(span)
  }
  function makeSpanBottom(index) {
    let span = document.createElement('span');
    let spanTxt = document.createTextNode(resultV[index].info);
    span.appendChild(spanTxt);
    a.appendChild(span)
  }
  makeSpanTop(index);
  makeSpanBottom(index);
  let block = document.querySelector(".contents")
  block.appendChild(a)
};

let nomalData = nomalV.length
let volunData = volunV.length
let jobData = jobV.length
let bidData = bidV.length
let resultData = resultV.length

for (var i = 0; i < nomalData; i++) {
  createNoticeInfo01(i)
}
for (var i = 0; i < volunData; i++) {
  createNoticeInfo02(i)
}
for (var i = 0; i < jobData; i++) {
  createNoticeInfo03(i);
}
for (var i = 0; i < bidData; i++) {
  createNoticeInfo04(i);
}
for (var i = 0; i < resultData; i++) {
  createNoticeInfo05(i);
}
    
/* ----------클릭 이벤트--------- */
let li00 = document.getElementById('li00');
let li01 = document.getElementById('li01');
let li02 = document.getElementById('li02');
let li03 = document.getElementById('li03');
let li04 = document.getElementById('li04');
let li05 = document.getElementById('li05');
let contents = document.getElementsByClassName('contents');
var a = document.querySelectorAll('.contents > a')

li01.onclick = function () {
  $('.contents').empty()
  console.log(a)
  for (var i = 0; i < nomalData; i++) {
    createNoticeInfo01(i)
  }
};
li02.onclick = function () {
  $('.contents').empty()
  for (var i = 0; i < volunData; i++) {
    createNoticeInfo02(i)
  }
};
li03.onclick = function () {
  $('.contents').empty()
  for (var i = 0; i < jobData; i++) {
    createNoticeInfo03(i)
  }
};
li04.onclick = function () {
  $('.contents').empty()
  for (var i = 0; i < bidData; i++) {
    createNoticeInfo04(i)
  }
};
li05.onclick = function () {
  $('.contents').empty()
  for (var i = 0; i < resultData; i++) {
    createNoticeInfo05(i);
  }
};
li00.onclick = function () {
  $('.contents').empty()
  for (var i = 0; i < nomalData; i++) {
    createNoticeInfo01(i)
  }
  for (var i = 0; i < volunData; i++) {
    createNoticeInfo02(i)
  }
  for (var i = 0; i < jobData; i++) {
    createNoticeInfo03(i);
  }
  for (var i = 0; i < bidData; i++) {
    createNoticeInfo04(i);
  }
  for (var i = 0; i < resultData; i++) {
    createNoticeInfo05(i);
  }
};

// 메인슬라이드 json
$.ajax({
  type: "GET",
  url: "/cjculture/js/main.json",
  dataType: "json",
  success: function (data) {
    var elem = "";
    console.log(data);
    $.each(data, function(i, obj){
      elem += `<div class="swiper-slide p_slide">`;
        elem += `<div class="images">`;
          elem += `<img src="${obj.imgUrl}" alt="${obj.imgAlt}">`;
        elem += `</div>`;
        elem += ` <div class="txtBox">`;
          elem += `<h1>${obj.tbox.title}</h1>`;
          elem += `<div>`;
            elem += `<span>${obj.tbox.description.txt01}</span>`;
            elem += `<span>${obj.tbox.description.txt02}</span>`;
            elem += `<span>${obj.tbox.description.txt03}</span>`;
            elem += `<span>${obj.tbox.description.txt04}</span>`;
            elem += `<span>${obj.tbox.description.txt05}</span>`;
          elem += `</div>`;
        elem += `</div>`;
      elem += `</div>`;
    });
    $('.main_wrapper').append(elem);
  },
  error: function (xhr) {
    console.log(`${xhr.status}/${xhr.errorText}`);
  }
});