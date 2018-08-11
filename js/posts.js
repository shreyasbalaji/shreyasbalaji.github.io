function makeBodyWidth($image) {
    $image.width("100%");
    $image.css("margin-left", "0px");
    $image.css("margin-right", "0px");
    var bodyWidth = $("body").width();
    if (bodyWidth < 600) {
        var offsetLeft = $image.offset().left;
        $image.css("margin-left", (-offsetLeft) + "px");
        $image.width(bodyWidth);
    }
}

$(document).ready(function() {
    makeBodyWidth($(".header-image"));
    makeBodyWidth($(".post-content figure"));
    $(window).resize(function() {
        makeBodyWidth($(".header-image"));
        makeBodyWidth($(".post-content figure"));
    });
});
