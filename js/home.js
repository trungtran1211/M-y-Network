$(document).ready(function(){
  $('.creators-list').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
      ]  
  });
});


$(document).ready(function() {
    var $slider = $('.list__nav');
    var $progressBar = $('.progress');
    var $progressBarLabel = $( '.slider__label' );
    
    $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
      var calc = ( (nextSlide+1) / (slick.slideCount) ) * 100;
      $progressBar
        .css('background-size', calc + '% 100%')
        .attr('aria-valuenow', calc );
      
    //   $progressBarLabel.text( calc + '% completed' );
    });

    $('.list__single').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
    });
    $('.list__nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.list__single',
        focusOnSelect: true,
        autoplay: false,
        autoplaySpeed: 1000,
        arrows: true,
        prevArrow:`<button type='button' class='slick-prev pull-left'><img src="./images/home/partner-left.png" alt=""></button>`,
        nextArrow:`<button type='button' class='slick-next pull-right'><img src="./images/home/partner-right.png" alt=""></button>`
    });

});




$(document).ready(function() {
    var $slider_trend = $('.trend__list');
    var $progresstrend = $('.progressTrend');
    //var $progressBarLabel = $( '.slider__label' );
    
    $slider_trend.on('beforeChange', function(event, slick, currentSlide, nextSlideTrend) {   
      var calc = ( (nextSlideTrend+3) / slick.slideCount ) * 100;
      
      $progresstrend
        .css('background-size', calc + '% 100%')
        .attr('aria-valuenow', calc );
      
    //   $progressBarLabel.text( calc + '% completed' );
    });
    
    $('.trend__list').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        autoplay: true,
        speed: 2000, 
        autoplay: true,
        cssEase: 'ease',
        
    });
});




// Search

const searchBtn = document.querySelector(".search-btn");
const searchBox = document.querySelector(".search-box");
const searchInput = document.querySelector(".hide");

searchBtn.addEventListener("mouseover", func, false);
function func()
{ 
   searchBox.classList.addClass("search-bg");
}

  // searchBox.classList.toggle("search-bg");
  // searchInput.classList.toggle("show");

// Xoá khoảng trắng aos

$('[data-aos]').parent().addClass('hideOverflowOnMobile');


// menu

const btnmenu = document.querySelector(".iconmenu");
const listmenu = document.querySelector(".main-menu");
const btnclosemenu = document.querySelector(".menu-close");

btnmenu.onclick = () => {
  listmenu.classList.toggle("show-menu");
}

btnclosemenu.onclick = () => {
  listmenu.classList.toggle("show-menu");
}