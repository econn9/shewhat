
(function() {
    $(document).ready(function() {

        $.ajax({
            method:'GET',
            url: '/api/event/' + 1111 + '/' + 2222,
            success: function(data) {
                data.forEach(function(event) {
                    $('#bad').append('<h2>' + event.badYear + '</h2>');
                    $('#good').append('<h2>' + event.goodYear + '</h2>');
                    $('#good').append('<li>' + event.good + '</li>');
                    $('#bad').append('<li>' + event.bad + '</li>');
                    // $('#bad').append('<li>' + event.badLink + '</li>');
                    $('#good').append('<a id="goodurl" target="_blank" href="' + event.goodLink + '" >Full Story >></a>');
                    $('#bad').append('<a id="badurl" target="_blank" href="' + event.badLink + '" >Full Story >></a>');

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
