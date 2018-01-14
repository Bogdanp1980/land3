
  $(".owl-carousel").owlCarousel({
  items: 4,
  dots: true,
  loop: true,
  responsive: {
    1200:
    {
      items: 4
    },
    1000:
    {
      items: 3
    },
    700:
    {
      items: 2
    },
    0:
    {
      items: 1,
      dots:false,
      autoplay: true,
      autoplayTimeout: 5000
    }
  }
});
$(".owl-carousel1").owlCarousel({
items: 5,
dots: true,
loop: true,
responsive: {
  1200:
  {
    items: 5
  },
  1000:
  {
    items: 4
  },
  700:
  {
    items: 3
  },
  500:
  {
    items: 2
  },
  0:
  {
    items: 1,
    dots:false,
    autoplay: true,
    autoplayTimeout: 5000
  }
}
});

$(".owl-carousel2").owlCarousel({
items: 1,
dots: true,
loop: true

});

$(".header__menu-button, .header__hamb-close").on("click", function(){
  $(".header__hamb").toggleClass('active');
  $("body").toggleClass('overflow-body');

})
All.onclick = function(){

  var elem = $('.work-section__col');
  elem.remove('qweqwe');
  var elem1 = $('.work-section__col');
  elem1.addClass('qweqwe1');

}
Web.onclick = function(){
  var elem = $('.work-section__col');
  elem.toggleClass('qweqwe');
  var elem1 = $('.web');
  elem1.toggleClass('qweqwe1');
}
Mobile.onclick = function(){
  var elem = $('.work-section__col');
  elem.toggleClass('qweqwe');
  var elem1 = $('.mobile');
  elem1.toggleClass('qweqwe1');
}
/*
$("#Web-design").on("click", function(){
  var elem = $('.mobile, .phone');
  elem.toggleClass('qweqwe');
})
$("#Mobile-design").on("click", function(){
  var elem = $('.web, .phone');
  elem.toggleClass('qweqwe');
})
$("#Photography").on("click", function(){
  var elem = $('.mobile, .web');
  elem.toggleClass('qweqwe');
})*/
/*
$("#Web-design").on("click", function(){
  $(".work-section__col").hide();
  $(".web").show();
})
$("#Mobile-design").on("click", function(){
  $(".work-section__col").hide();
  $(".mobile").show();
})
$("#Photography").on("click", function(){
  $(".work-section__col").hide();
  $(".photo").show();
})
$("#All").on("click", function(){
  $(".work-section__col").show();
})*/
