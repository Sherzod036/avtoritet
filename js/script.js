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

    // let hero = $(".hero");
    // $(window).scroll(function () {
    //     hero.css({ backgroundPosition: "0 " + -window.scrollY + "px" });
    // });

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
});
