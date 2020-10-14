//var prevScrollpos = window.pageYOffset;
//window.onscroll = function() {
 // var currentScrollPos = window.pageYOffset;
 // if (prevScrollpos > currentScrollPos) {
 ///   document.getElementById("new").style.top = "0";
 /// } else {
 //   document.getElementById("new").style.top = "-100px";
//  }
 // prevScrollpos = currentScrollPos;
//}

// ===== Scroll to Top ==== 
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200);    // Fade in the arrow
  } else {
      $('#return-to-top').fadeOut(200);   // Else fade out the arrow
  }
});
$('#return-to-top').click(function() {      // When arrow is clicked
  $('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
  }, 500);
});

// ===== directions ==== 
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      $('#directions').fadeIn(200);    // Fade in the arrow
  } else {
      $('#directions').fadeOut(200);   // Else fade out the arrow
  }
});
$('#directions').on('click', function (e) {

 
})


$(document).ready(function(){
  $('.nav-button').click(function(){
      $('.nav-button').toggleClass('change');
  });

  
  $('.button').click(function(){
    $('.nav').toggleClass('show');
});
  
});


$(window).scroll(function(){
  let position=$(this).scrollTop();
  console.log(position);
  
});    

$(window).scroll(function(){
  let position=$(this).scrollTop();
  console.log(position);
  if(position>=650){
      $('.camera-img').addClass('fromleft');
      $('.mission-text').addClass('fromright');            
  }
  else{
      $('.camera-img').removeClass('fromleft');
      $('.mission-text').removeClass('fromright');     
  }
});    