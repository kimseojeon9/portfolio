$(function () {

  $(".slide").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
  });
  
  $(".slide_brn").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });
  
  $(".site").click(function () {
    if ($(this).hasClass("on")) {
      $(this).add(".selectList").removeClass("on");
    } else {
      $(this).add(".selectList").addClass("on");
    }
    return false;
  });
});