// iife - 즉시실행익명함수
;(function(win, $) {
    function attachBtnEvents() {
        $('.btn-1').on('click', function(e) {
            console.log('btn-1', e);
        });

        $('.btn-2').on('click', function(e) {
            console.log('btn-2', e);
            // ! 상위 요소로 이벤트 전파 하지 않음
            e.stopPropagation();
            // ! 동일 선상의 리스너에 이벤트 전파 하지 않음, 단 순서가 중요
            e.stopImmediatePropagation();
        });

        $('.btn-2').on('click', function(e) {
            console.log('btn-2 2', e);
            e.stopPropagation();
            // e.stopImmediatePropagation();
        });

        $('.btn-2').on('click', function(e) {
            console.log('btn-2 3', e);
            e.stopPropagation();
        });

        $('.btn-3').on('click', function(e) {
            console.log('btn-3', e);
            // ! href 기본 동작 방지
            e.preventDefault();
        });
    }

    function attachDivEvents() {
        $('.div-1').on('click', function(e) {
            console.log('div-1', e);
            // e.currentTarget === .div-1
            // e.target === .div-1
        });

        $('.div-2').on('click', function(e) {
            console.log('div-2', e);
        });

        $('.div-3').on('click', function(e) {
            console.log('div-3', e);
        });
    }
    
    function attachOuterEvents() {
        $(document).on('click', function(e) {
            console.log('document', e);
            // e.currentTarget === documnet
        });

        $(window).on('click', function(e) {
            console.log('window', e);
            // e.currentTarget === window
        });
    }

    function dettachEvents() {
        $('.btn-1').off('click');
    }

    // ! addEventListener === on
    // ! removeEventListener === off

    // window.addEventListener('DOMContentLoaded',
    $(function() {
        // win.console.log('dom ready');
        attachBtnEvents();
        attachDivEvents();
        attachOuterEvents();

        // dettachEvents();
    });
})(window, window.jQuery);


(function() {

})();

// 익명함수
// function () {
// }

// 함수 실행방법
// function a(win, $) {
// }
// a(window, window.jQuery);

// 즉시 실행 익명함수
// (function () {
//     var b = 'b';
//     console.log('b', b);
// })();
// console.log('out', b);

// ;(function (win, $) {

//     $(function() {

//     });

//     $.ready(function() {

//     })

//     window.addEventListener('DOMContentLoaded', function() {

//     });

//     window.addEventListener('load', function() {

//     });
// })(window, window.jQuery);

