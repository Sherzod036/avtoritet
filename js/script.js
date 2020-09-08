$(document).ready(function () {
    $("nav.tabs").delegate("li", "click", function () {
        var li = $(this);

        if (!li.is(".selected")) {
            li.addClass("selected").siblings("li").removeClass("selected");
            $("nav.tabs").siblings("div").hide().eq(li.index()).show();
        }
    });

    $(".tabs ul li a").on("click", function () {
        $(".tabs ul li a").removeClass("tab-active");
        $(this).addClass("tab-active");
    });

    $(".hamburger").on("click", function () {
        $(this).toggleClass("is-active");
        $(".header__navigation").slideToggle().toggleClass("d-block");
    });

    $(".single-tour__slider-bottom-imgs").slick({
        slidesToShow: 7,
        prevArrow:
            '<img class="prev-arrow" src="../images/slider/arrow-left.svg">',
        nextArrow:
            '<img class="next-arrow" src="../images/slider/arrow-right.svg">',
        responsive: [
            {
                breakpoint: 995,
                settings: {
                    slidesToShow: 6,
                },
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 4,
                },
            },
        ],
    });

    $(".open_popup").click(function () {
        $(".single-tour__popup").fadeIn().css({ display: "flex" });
    });

    $(".single-tour__close-icon").click(function () {
        $(".single-tour__popup").fadeOut();
    });

    let gallery = $(".single-tour__slider-bottom-img img");

    gallery.on("click", function () {
        let currentImage = $(this).attr("src");
        $(".single-tour__slider-top-img img")
            .fadeOut(400, function () {
                $(".single-tour__slider-top-img img").attr("src", currentImage);
                $(".single-tour__slider-top-img img").attr("srcset", "");
            })
            .fadeIn();
    });

    gallery.on("click", function () {
        gallery.removeClass("slider-border");
        $(this).addClass("slider-border");
    });

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".hero__text", {
        scrollTrigger: ".hero",
        y: "100%",
        duration: 2,
        opacity: 0,
    });
    gsap.from(".hero__button", {
        scrollTrigger: ".hero",
        y: "100%",
        duration: 2,
        opacity: 0,
    });
    gsap.from(".offer__title", {
        scrollTrigger: ".offer__title",
        y: "100%",
        duration: 2,
        opacity: 0,
    });
    gsap.from(".working__title", {
        scrollTrigger: ".working",
        y: "100%",
        duration: 2,
        opacity: 0,
    });

    $(".header__navigation ul li a").on("click", function () {
        $(".header__navigation ul li a").removeClass("header-border");
        $(this).addClass("header-border");
    });
});
