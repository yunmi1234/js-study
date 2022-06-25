;(function(win, $) {
    function renderList() {
        var dataList = [
            {
                name: '어쩌고 저쩌고1',
                level: '어쩌고 저쩌고1'
            },
            {
                name: '어쩌고 저쩌고2',
                level: '어쩌고 저쩌고2'
            }
        ];

        var markup = '';

        // ! https://mustache.github.io/
        // ! https://handlebarsjs.com/
        // ! https://programmingsummaries.tistory.com/381

        var source = $('#item-each-template').html();
        var template = Handlebars.compile(source);
        if (dataList.length) {
            markup += template({ dataList: dataList });
        } else {
            markup = [
                '<div>',
                    '표시할 목록이 없습니다.',
                '</div>'
            ].join('');
        }

        $('.container').html(markup);
    }

    $(function() {
        renderList();
    });
})(window, window.jQuery);
