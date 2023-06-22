// Smooth scrolling when clicking on navbar links
$(document).ready(function() {
    $('#navbar a').on('click', function(event) {
      if (this.hash !== '') {
        event.preventDefault();
  
        const hash = this.hash;
  
        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top
          },
          800 // Adjust the scrolling speed as desired
        );
      }
    });
  });
  