var $screen = $(".screen .slider");
$screen.slick({
  //init Slick
  fade: true,
  speed: 0,
  arrows: false,
  dots: false,
  useCSS: false,
  autoplay: true,
  autoplaySpeed: 3000,
});
$screen.on("click", function () {
  //go to next slide on click
  $screen.slick("slickNext");
});
