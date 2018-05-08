


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
    $(".navbar a").on('click', function(event) {

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


});

/*-----------------------------------------------
*   script by w3schools
https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
-----------------------------------------------*/

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}