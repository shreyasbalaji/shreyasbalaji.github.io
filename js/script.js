
function computePercentWidth(width) {
    var fp = 0.6;
    var m = (fp - 0.8) / (960/fp - 550);
    if (width > 550) {
       var proportion = 0.8 + m * (width - 550); 
       return proportion > fp ? proportion : fp;
    }
    return -1;
}

function pstringify(p) {
    return "" + (p * 100) + "%";
}

function doResize() {
    if (window.innerWidth > 550) {
        var percentWidth = computePercentWidth(window.innerWidth);
        $("div.container").css("width", pstringify(percentWidth));
        $("div.crescent").css("background-position", "" + (100 * (1.8 * percentWidth + 1) / 3 + 100 * 180 / window.innerWidth) + "% 0%");
    }
    if (window.innerWidth <= 800 && window.innerHeight > 1000) {
        if ($("div.home-quote-left").hasClass("one")) {
            $("div.home-quote-left").removeClass("one");
        }
        if ($("div.home-quote-wrapper").hasClass("six")) {
            $("div.home-quote-wrapper").removeClass("six");
            $("div.home-quote-wrapper").addClass("seven");
            $("div.home-quote-wrapper").addClass("less-left-margin");
        }
    }
    else {
        if (!$("div.home-quote-left").hasClass("one")) {
            $("div.home-quote-left").addClass("one");
        }
        if ($("div.home-quote-wrapper").hasClass("seven")) {
            $("div.home-quote-wrapper").removeClass("seven");
            $("div.home-quote-wrapper").addClass("six");
            $("div.home-quote-wrapper").removeClass("less-left-margin");
        }
    }
}

function sizeProfile() {
    var profile = $("#profile");
    var profileOffset = profile.offset().top;
    var rule = $("#cutoff");
    var ruleOffset = rule.offset().top;
    var bgHeight = 470;
    var profileHeight = profile.height();
    var newProfileHeight = profileHeight + bgHeight - ruleOffset;
    profile.height(newProfileHeight);
}

$(document).ready(function() {
    doResize();
    sizeProfile();
    // $("#profile").height(500);
    $(window).resize(function() {
        doResize();
        sizeProfile();
    });
});
