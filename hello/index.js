/* 변수 */
var today = document.getElementById('today')
var sayHello = document.getElementById('sayHello');

var dateInfo = new Date();
var date = {
    month: dateInfo.getMonth() + 1,
    date: dateInfo.getDate(),
    hours: dateInfo.getHours() +9,
    minutes: dateInfo.getMinutes(),
}

// today.appendChild(`${date.month}.${date.date}`)

var greeting;
if (date.hours > 18) { // 19-24 밤
    greeting = 'It\'s a good night!';
} else if (date.hours > 12) { // 13-18 오후
    greeting = 'Good afternoon!';
} else if (date.hours > 8) { //  9-12 오전
    greeting = 'Good morning!';
} else { // 0-8 새벽
    greeting = 'Hello';
}

// sayHello.appendChild(`${greeting}`)

$(document).ready(function(){
    $('.project .container ul li').on('click', function(){
        $(this).addClass('on').siblings().removeClass('on');
        $('#' + $(this).data('id')).addClass('on').siblings().removeClass('on');
    });
    
    $('.bt button').on('click', function(){
        $(this).addClass('on').siblings().removeClass('on');
        $('#' + $(this).data('id')).addClass('on').siblings().removeClass('on');
    });
});