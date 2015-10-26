//This file changes the column alignment to match screen width
//for the potfolio.

changeAlignment(window.innerWidth);

$(window).resize(function() {
    changeAlignment(window.innerWidth);
});

//======================================//

//If it's one column, the thumnails will get center alignmnet.
//Otherwise, they'll be aligned to the right
function changeAlignment(width) {
    if (width < 992) {
        $(".thumb").css("text-align", "center");
        $(".thumb").css("margin-top", "35px");
    }
    else {
        $(".thumb").css("text-align", "right");
        $(".thumb").css("margin-top", "0px");
    }
};
