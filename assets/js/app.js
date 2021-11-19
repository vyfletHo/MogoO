$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffser = $(window).scrollTop();


    /* Fixed Header */
    checkScroll(scrollOffser);

    $(window).on("scroll", function() {
        scrollOffser = $(this).scrollTop();

        checkScroll(scrollOffser);
    });

    function checkScroll(scrollOffser) {
        if( scrollOffser >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }



    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active")
        $this.addClass("active");


        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });


    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });



    /* Collapse */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active");
    });


    /*Slider*/
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });



});
