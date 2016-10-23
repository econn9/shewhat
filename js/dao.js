
(function() {
    $(document).ready(function() {

        $.ajax({
            method:'GET',
            url: '/api/event/' + 1111 + '/' + 2222,
            success: function(data) {
                data.forEach(function(event) {
                    $('#bad').append('<h3>' + event.badYear + '</h3>');
                    $('#good').append('<h3>' + event.goodYear + '</h3>');
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
