
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
    if (window.innerWidth < 800) {
        $(".less-left-margin").css("margin-left", "0").promise().done(function() {
            var offset = $(".less-left-margin").offset()['left'];
            $(".less-left-margin").css("margin-left", (-offset+24) + "px");
        });
    }
    else {
        $(".less-left-margin").css("margin-left", "");
    }


    if (typed1 !== null && window.innerWidth < 450) {
        typed1.stop();
    }
    // if (window.innerWidth <= 800 && window.innerHeight > 1000) {
    //     if ($("div.home-quote-left").hasClass("one")) {
    //         $("div.home-quote-left").removeClass("one");
    //     }
    //     if ($("div.home-quote-wrapper").hasClass("six")) {
    //         $("div.home-quote-wrapper").removeClass("six");
    //         $("div.home-quote-wrapper").addClass("seven");
    //         $("div.home-quote-wrapper").addClass("less-left-margin");
    //     }
    // }
    // else {
    //     if (!$("div.home-quote-left").hasClass("one")) {
    //         $("div.home-quote-left").addClass("one");
    //     }
    //     if ($("div.home-quote-wrapper").hasClass("seven")) {
    //         $("div.home-quote-wrapper").removeClass("seven");
    //         $("div.home-quote-wrapper").addClass("six");
    //         $("div.home-quote-wrapper").removeClass("less-left-margin");
    //     }
    // }
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
    $(window).resize(function() {
        doResize();
    });
});

function getTypedConfig(stringsElement) {
    return {
      stringsElement: stringsElement,
      smartBackspace: true,
      backSpeed: 15,
      backDelay: 500,
      showCursor: false,
      typeSpeed: 35
    };
}

var typed1 = null;
punslist = [
    "You should <b>never</b> trust atoms. They make up <b>everything</b>.",
    "Don't room with a <b>tennis player</b>. You'll have to <b>sleep</b> past the <b>racket</b>.",
];

$(document).ready(function() {
    var pun = punslist[Math.floor(Math.random() * punslist.length)];
    $("#pun").html(pun);
});

$(document).ready(function() {
    if (window.innerWidth > 450) {
        typed1 = new Typed('#typed1', getTypedConfig('#typed-strings1'));
    }
});
