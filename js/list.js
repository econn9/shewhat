
(function() {
    $(document).ready(function() {

        let date = new Date();
        let year = date.getFullYear();
        let day = date.getDate();
        let month = date.getMonth() + 1;

        let monthNames = ["0", "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];



        // var day = 222;
        // var month = 111;

        $('#month').append(monthNames[month]);
        window.addEventListener('load', buildDays(day));

        function buildDays(today){
            let daybar = $('#daybar');
            let dayArr = [];
            for(var i = -2; i < 3; i++){
                let weekdayEl = $('<li>' + (i + today) + '</li>');
                if((i+today) < 1){
                    let prev = new Date(year, month - 1, i+today);
                    addLi(dayArr, prev.getDate());
                } else if((i+today > 0)){
                    addLi(dayArr, i + today);
                }
            }
            daybar.append(dayArr);

        }

    // appends with correct superscript for day number
        function addLi(el, val){
            switch(!!val){
                case (val === 1 || val === 21 || val === 31):
                    el.push('<li>'+ val + '<sup>st</sup></li>');
                    break;
                case (val === 2 || val === 22):
                    el.push('<li>'+ val + '<sup>nd</sup></li>');
                    break;
                case (val === 3 || val === 23):
                    el.push('<li>'+ val + '<sup>rd</sup></li>');
                    break;
                case (val>3 && val<21):
                case(val>23 && val<31):
                    el.push('<li>'+ val + '<sup>th</sup></li>');
                    console.log("heroeherhehr");
                    break;
            }
            // $(el).append('<li>'+ val + '</li>');
        }

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
                    // good.animate({left: '50%'}, { duration: 1, queue: true });
                    // bad.animate({left: '50%'}, { duration: 1, queue: true });
                    gCurt.animate({opacity: '0'}, {duation:1000, queue: false});
                    bCurt.animate({opacity: '0'}, {duation:1000, queue: true});

                    // gcurt.css('display', 'none');


                    good.animate({left: '0'}, { queue: false });
                    bad.animate({left: '0'}, { queue: false });
                    good.animate({opacity: '1'}, { queue: false });
                    bad.animate({opacity: '0'}, { queue: false });
                    goodState = !goodState;
                    badState = false;
                } else {
                    // curatin.css('display', 'none');
                    good.animate({left: '50%'}, { duration: 1, queue: false });
                    bad.animate({left: '50%'}, { duration: 2, queue: false });
                    good.animate({opacity: '0'}, { queue: false });
                    bad.animate({opacity: '1'}, { queue: false });
                    bCurt.animate({opacity: '0'}, {duation:1000, queue: true});
                    gCurt.animate({opacity: '0'}, {duation:1000, queue: false});

                    goodState = false;
                    badState = !badState;
                }
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

            console.log('Mood shift: ', emoji);

        }

        function moveSlides(slide) {
            let goodOn, badOn,
            emo1 = $('a.happy'), emo2 = $('a.sad'),
            good = $('#good'),bad = $('#bad');

            if (slide.hasClass('happy') && !goodOn) {
                goodOn = !goodOn;
                badOn = false;
                goodSlid = !goodSlid;
                good.animate({left: '0'});
                bad.animate({left: badWidth});
                good.css('z-index', '999');
                bad.css('z-index', '1001');

            } else if (slide.hasClass('sad') && !badOn) {
                badOn = !badOn;
                goodOn = false;
                badSlid = !badSlid;
                good.animate({left: goodWidth});
                bad.animate({left: '0'});
                good.css('z-index', '1001');
                bad.css('z-index', '999');

            }

            console.log(slide);
        }


//emoji click functionality
        // $(function(){
        //     let goodSwitch = 0, badSwitch = 0,
        //     emo1 = $('a.happy'), emo2 = $('a.sad'),
        //     good = $('#good'),bad = $('#bad');
        //
        //     emo1.click(function(){
        //         // good.slideToggle();
        //         if(!goodSlid){goodSlid = true;}
        //         if(goodSwitch%2 == 0){
        //             good.animate({left: '0'});
        //             goodSwitch++;
        //             good.css('z-index', '1005');
        //         } else {
        //             good.animate({left: goodWidth});
        //             goodSwitch++;
        //             good.css('z-index', '665');
        //         }
        //     });
        //     emo2.click(function(){
        //         // bad.slideToggle();
        //         if(!badSlid){badSlid = true;}
        //         if(badSwitch%2 == 0){
        //             bad.animate({left: badWidth});
        //             badSwitch++;
        //             bad.css('z-index', '667');
        //         } else {
        //             bad.animate({left: '0'});
        //             badSwitch++;
        //             bad.css('z-index', '998');
        //
        //         }
        //     })
        // });

        $.ajax({
            method:'GET',
            url: '/api/event/' + 111 + '/' + 222,
            success: function(data) {
                data.forEach(function(event) {
                    $('#good').append('<li>' + event.good + '</li>');
                    $('#bad').append('<li>' + event.bad + '</li>');
                })
            }
        });

        $.ajax({
            method: 'GET',
            url: '/api/event',
            success: function(data) {
                data.forEach(function(event) {
                    $('#events').append('<input type="checkbox" data-id="' + event._id + '"> ' + event._id);
                });
            }
        });

        $('#eventDeleteForm').submit(function(event) {
            $.ajax({
                method: 'DELETE',
                url: '/api/event/57197df0139d13e011990ee1',
                success: function() {
                    console.log('deleted ' + checkedEvent.attr('data-id'));
                }
            });
            event.preventDefault();
            return false;
        });
    });
})();
