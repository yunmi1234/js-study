// iife - 즉시실행익명함수
;(function(win, $) {    
    function attachModalEvents() {
        console.log('attachModalEvents');
        $('#modal button').on('click', function() {
            $('#modal').hide();
        });

        $(document).on('click', function(e) {
            console.log(e.currentTarget, e.target);
            var $target = $(e.target);
            // console.log($target.closest('#modal'), $target.closest('#modal').length);
            // console.log($target.attr('id') === 'modal' || !!$target.closest('#modal').length);
            var modalOutside = $target.attr('id') !== 'modal' || $target.closest('#modal').length === 0;
            console.log(modalOutside);
            if (modalOutside) {
                $('#modal').hide();
            }
        });
    }

    $(function() {
        attachModalEvents();
    });
})(window, window.jQuery);

