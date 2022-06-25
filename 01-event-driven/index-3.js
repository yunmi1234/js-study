// iife - 즉시실행익명함수
;(function(win, $) {    
    function attachCustomEvents() {
        console.log('attachCustomEvents');

        $(document).on('ymc01', function(e) {
            console.log('ymc01', e);
        });

        $(document).on('nonoll', function(e) {
            console.log('nonoll', e);
        });

        $(document).on('resize', function(e) {
            console.log('resize', e);
        });

        // $(document).trigger('nonoll');
        // $(document).trigger('ymc01');
        // $(document).trigger('resize');


        // ! https://developer.mozilla.org/ko/docs/Web/API/CustomEvent/CustomEvent
        var triggerEvent = new CustomEvent('nonoll', {});
        document.dispatchEvent(triggerEvent);

        // event 를 이용한 제어 방식 - 이벤트 드리븐
    }

    $(function() {
        attachCustomEvents();
    });
})(window, window.jQuery);

