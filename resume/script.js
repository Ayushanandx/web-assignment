// Smooth submit for contact form
$("#contactForm").on("submit", function(e) {
    e.preventDefault();
    $(".success").fadeIn();
});
