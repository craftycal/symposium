$(window).on("load", function() {

  // vibration
  navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
  $('.vib').click(function() {
    navigator.vibrate(50);
  });


  // nav menu
  $( '#navButton' ).on('click tap', function() {
    $( '.navigation' ).slideToggle( 'slow', function() {
      $( '.no-colour' ).toggleClass( 'colour' );
      $( '.fa-bars' ).toggleClass( 'fa-times' );
    });
  });

  $(window).on('resize', function() {
    if ($(this).width() > 800) {
      $('.navigation').css({
        'display': 'flex'
      });

    } else {
      $('.navigation').css({
        'display': 'none',
        'height': '50px !important'
      });
    }
  });


  // scroll animation
  function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
  }
  $(".next-button").on('click tap', function() {
    scrollToAnchor('start');
  });
  $(".link-goals").on('click tap', function() {
    scrollToAnchor('goals');
  });
  $(".link-speakers").on('click tap', function() {
    scrollToAnchor('speakers');
  });
  $(".link-pricing").on('click tap', function() {
    scrollToAnchor('pricing');
  });

  // ripple button
  $('.hvr-ripple-out-good').on('click tap', function() {
    var el = $(this),
    newone = el.clone(true);
    el.before(newone);
    el.remove();
    newone.addClass('fill-good');
  });
  $('.hvr-ripple-out-good').on('click tap', function(){
    $(this).addClass('hvr-ripple-out');
  });
});
