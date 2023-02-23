$(document).on("scroll", function () {
  if ($(document).width() < 1024) return false;
  if ($(document).scrollTop() > $(".full-page").height() / 2)
    $("header").addClass("fixed");
  else $("header").removeClass("fixed");
});

$(".up-btn").on("click", function () {
  $("html,body").animate(
    {
      scrollTop: 0,
    },
    1500
  );
});
$("#show-menu").on("click", function () {
  $("#hidden-menu").animate(
    {
      right: 0,
    },
    800
  );
});
$("#hidden-menu .close").on("click", function () {
  $("#hidden-menu").animate(
    {
      right: "-300px",
    },
    500
  );
});

$(document).ready(function () {
  $(".slider").slick({
    dots: false,
    prevArrow:
      '<div class="arrow-prev"><i class="fa-solid fa-arrow-left"></i></div>',
    nextArrow:
      '<div class="arrow-next"><i class="fa-solid fa-arrow-right"></i></div>',
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
  });
});
