
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

$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      $('#float-btn').fadeIn(200);    // Fade in the arrow
  } else {
      $('#float-btn').fadeOut(200);   // Else fade out the arrow
  }
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

$(document).ready(function(){
  $('.float').click(function(){
      $('.float').toggleClass('change');
    
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

$(window).scroll(function(){
  let position=$(this).scrollTop();
  if(position>=200){
      $('.nav-menu').addClass('custom-navbar');
  }
  else{
      $('.nav-menu').removeClass('custom-navbar');
  }
});

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}
