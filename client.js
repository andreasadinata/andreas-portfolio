$(document).ready(function () {
    $(window).scroll(function () {
        if (document.body.scrollTop === 0)
            $("header").css({
                "box-shadow": "none"
            });
        else {
            $("header").css({
                "box-shadow": "0px -1px 18px 5px rgba(112, 112, 112, 1)"
            });
        }
    });
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

});
