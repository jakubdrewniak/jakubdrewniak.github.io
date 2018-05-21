$( document ).ready(function() {

/*-----------------------------------------------
*   script by w3schools
https://www.w3schools.com/bootstrap/bootstrap_ref_js_scrollspy.asp
changed line "scrollTop: $(hash).offset().top " to "scrollTop: $(hash).offset().top - 80" to prevent scrolling to low
deleted window.location.hash
-----------------------------------------------*/

    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 100});

    // Add smooth scrolling on all links inside the navbar
    $(".navbar a, #footer a, #home a").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top - 80
        }, 400);
      } // End if
});

/*-----------------------------------------------
*   script by paulund
https://paulund.co.uk/how-to-create-an-animated-scroll-to-top-button-with-jquery
-----------------------------------------------*/

//Check to see if the window is top if not then display button
$(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
            $('#myBtn').fadeIn();
        } else {
            $('#myBtn').fadeOut();
        }
    });

    //Click event to scroll to top
    $('#myBtn').click(function(){
        $('html, body').animate({scrollTop : 0},400);
        return false;
    });

});
 



 /*-----------------------------------------------
when toggler button is visible, collapse menu after clicking nav link or anywhere on body
-----------------------------------------------*/
 $('body').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});




/*-----------------------------------------------
*   sticky navbar (sticky navbar from bootstrap4 doesn't work on IE)
-----------------------------------------------*/

$( document ).ready(function() {

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("nbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixed-top")
  } else {
    navbar.classList.remove("fixed-top");
  }
}
});
