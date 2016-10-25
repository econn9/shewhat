(function() {
    $(document).ready(function() {

    let goodSlid, badSlid = false;

    let goodWidth = document.getElementById('good').offsetWidth;
    let badWidth = document.getElementById('bad').offsetWidth;

    $(window).on('resize', function() {
        if (badSlid) {
            $('#good').css('left', '50%');
        } else if (goodSlid) {
            $('#bad').css('left', '50%');
        }
    });

    $(function(){
        let emojis = [];
        emojis.push($('.sad'));
        emojis.push($('.happy'));
        emojis.forEach(function(e) {
            e.click(function() {
                slideIt(e);
            });
        });
    });
    let goodState, badState;
    function slideIt(emoji) {

        let emo1 = $('a.happy'), emo2 = $('a.sad'),
        good = $('#good'),bad = $('#bad'),
        gCurt = $('#good-curtain'), bCurt = $('#bad-curtain');

        if (!goodState && !badState){
            if (emoji.hasClass('happy')) {
                gCurt.animate({opacity: '0'}, {duation:1000, queue: false});
                bCurt.animate({opacity: '0'}, {duation:1000, queue: true});

                good.animate({left: '0'}, { queue: false });
                bad.animate({left: '0'}, { queue: false });
                good.animate({opacity: '1'}, { queue: false });
                bad.animate({opacity: '0'}, { queue: false });
                goodState = !goodState;
                badState = false;
            } else {
                bCurt.animate({opacity: '0'}, {duation:1000, queue: true});
                gCurt.animate({opacity: '0'}, {duation:1000, queue: false});
                good.animate({left: '50%'}, { duration: 1, queue: false });
                bad.animate({left: '50%'}, { duration: 2, queue: false });
                good.animate({opacity: '0'}, { queue: false });
                bad.animate({opacity: '1'}, { queue: false });

                goodState = false;
                badState = !badState;
            }
            setTimeout(function() {
                gCurt.remove();
                bCurt.remove();
            }, 0);
        }

        if (emoji.hasClass('happy') && !goodState) {
            goodState = !goodState;
            badState = false;
            good.animate({left: '0'}, {queue: false});
            bad.animate({left: '0'}, {queue: false});
            good.animate({opacity: '1'}, {queue: false});
            bad.animate({opacity: '0'}, {queue: false});


        } else if (emoji.hasClass('sad') && !badState) {
            badState = !badState;
            goodState = false;
            good.animate({left: '50%'}, {queue: false});
            bad.animate({left: '50%'}, {queue: false});
            good.animate({opacity: '0'}, {queue: false});
            bad.animate({opacity: '1'}, {queue: false});
        }

    }
    });
})();
