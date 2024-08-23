$(document).ready(function () {
    const $window = $(window);
    const $navbar = $('.navbar');
    const $scrollUpBtn = $('.scroll-up-btn');
    const $menuBtn = $('.menu-btn');
    const $menu = $('.navbar .menu');
    const $html = $('html');

    // Sticky navbar and scroll-up button
    $window.scroll(function () {
        if (this.scrollY > 20) {
            $navbar.addClass("sticky");
        } else {
            $navbar.removeClass("sticky");
        }

        if (this.scrollY > 500) {
            $scrollUpBtn.addClass("show");
        } else {
            $scrollUpBtn.removeClass("show");
        }
    });

    // Slide-up button click
    $scrollUpBtn.click(function () {
        $html.animate({ scrollTop: 0 });
        $html.css("scrollBehavior", "auto");
    });

    // Menu item click for smooth scroll
    $('.navbar .menu li a').click(function () {
        $html.css("scrollBehavior", "smooth");
    });

    // Toggle menu/navbar
    $menuBtn.click(function () {
        $menu.toggleClass("active");
        $menuBtn.find('i').toggleClass("active");
    });

    // Typing text animation
    new Typed(".typing", {
        strings: ["a Software Engineer", "a Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Initialize EmailJS
    emailjs.init('3s7O0oG3BXROmJymD');

    // Form submission
    $('.hire-me-form').on('submit', function (e) {
        e.preventDefault();

        const name = $('#name').val();
        const email = $('#email').val();
        const message = $('#message').val();

        emailjs.send('service_gsvd867', 'template_gzg72hk', {
            from_name: name,
            from_email: email,
            message: message
        }).then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Your message has been sent successfully!');
        }).catch(function (error) {
            console.log('FAILED...', error);
            alert('Failed to send your message. Please try again later.');
        });

        // Reset the form
        $(this).reset();
    });
});
