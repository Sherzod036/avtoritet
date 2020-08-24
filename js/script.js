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

    $(".datepicker").datepicker({
        format: "mm/dd/yyyy",
        startDate: "-3d",
    });
});
