var today = document.getElementById('today')
var sayHello = document.getElementById('sayHello');

var dateInfo = new Date();
var date = {
    month: dateInfo.getMonth() + 1,
    date: dateInfo.getDate(),
    hours: dateInfo.getHours() +9,
    minutes: dateInfo.getMinutes(),
}

var nowhours;
if (date.hours > 13) { //오후
    nowhours = `${date.hours}:${date.minutes} PM`;
} else if (date.hours > 0) { //오전
    nowhours = `${date.hours}:${date.minutes} AM`;
}

// if(date.hours == 14) date.hours= 2;
// if(date.hours == 15) date.hours= 3;
// if(date.hours == 16) date.hours= 4;
// if(date.hours == 17) date.hours= 5;
// if(date.hours == 18) date.hours= 6;
// if(date.hours == 19) date.hours= 7;
// if(date.hours == 20) date.hours= 8;
// if(date.hours == 21) date.hours= 9;
// if(date.hours == 22) date.hours= 10;
// if(date.hours == 23) date.hours= 11;
// if(date.hours == 24) date.hours= 0;

console.log(`${date.hours}:${date.minutes}`) 
today.textContent = `Today ${nowhours}`

var greeting;
if (date.hours > 18) { // 19-24 밤
    greeting = 'It\'s a good night. Isn\'t it?';
} else if (date.hours > 12) { // 13-18 오후
    greeting = 'good afternoon!';
} else if (date.hours > 8) { //  9-12 오전
    greeting = 'hey! good morning!';
} else { // 0-8 새벽
    greeting = 'hello ~.~';
}
sayHello.textContent = `${greeting}`

function pop () {
    $('.project').show();
    return false;
}
function pop_b () {
    $('.project').show( function(){
        $('.project ul li:last').addClass('on').siblings().removeClass('on');
        $('#b').addClass('on').siblings().removeClass('on');
    });
    return false;
}


$(document).ready(function(){
    // 채팅
    $('.wellcom .bt button').on('click', function(e){
        var val = $(this).val();
        $('<div class="yours"><span class="you">'+val+'</sapn></div>').appendTo('.scrollbg');
        
        $('<div class="myAnswer"></div>').appendTo('.scrollbg');

        if (val == 'no'){
            setTimeout(function(){
                    $('.myAnswer').append('<span>Oh... are you busy?</span>')
            }, 1.5*1000);
            setTimeout(function(){
                    $('.myAnswer').append('<span>okey!</span>')
            }, 2.5*1000);
            setTimeout(function(){
                    $('.myAnswer').append('<span>see ya!</span>')
            }, 3.5*1000);
        } else if (val == 'yes') {
            setTimeout(function () {
                $('.myAnswer').append('<span>okey!</span>');
            }, 1.5 * 1000);
            setTimeout(function () {
                $('.myAnswer').append('<span>here</span>');
            }, 2.5 * 1000);
            setTimeout(function () {
                $('.myAnswer').append('<span><a href="#" onclick="pop()">매일유업</a></span>');
            }, 3.5 * 1000);
            setTimeout(function () {
                $('.myAnswer').append('<span><a href="#" onclick="pop_b()">청주시문화산업진흥센터</a></span>');
            }, 4 * 1000);
            setTimeout(function () {
                $('.myAnswer').append('<span>did you see that?</span>');
            }, 10 * 1000);
        }
    });

    // 프로필
    $('.wellcom .name .profile').on('click', function(){
        $('.wellcom .prfbg').addClass('on')
    });
    $('#close').on('click', function(){
        $('.wellcom .prfbg').removeClass('on')
    });
    $('.prfbg .prfWrap .bts button').on('click', function(e){
        var val = $('.prfbg .prfWrap .bts button').val();
        console.log(val);
        switch (val) {
            case 'skill':
            $('#skill').addClass('on').siblings().removeClass('on');
            break;
            case 'license':
            $('#license').addClass('on').siblings().removeClass('on');
            break;
            case 'education':
            $('#education').addClass('on').siblings().removeClass('on');
            break;
            default :
            $('#who').addClass('on').siblings().removeClass('on');
        }
    });

    // 프로젝트
    $('.project').hide();
    $('.project ul li').on('click', function () {
        $(this).addClass('on').siblings().removeClass('on');
        $('#' + $(this).data('id')).addClass('on').siblings().removeClass('on');
    });

    $('.project .bt button').on('click', function () {
        $(this).addClass('on').siblings().removeClass('on');
        $('#' + $(this).data('id')).addClass('on').siblings().removeClass('on');
    });
});

