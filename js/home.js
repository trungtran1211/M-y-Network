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
      var calc = ( (nextSlideTrend+1) / slick.slideCount ) * 100;
      
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

