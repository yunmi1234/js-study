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

        var source = $('#complete-template').html();
        var template = Handlebars.compile(source);
        var markup = template({
            dataList: dataList,
            isEmptyList: dataList.length === 0
        });
        $('.container').html(markup);
    }

    $(function() {
        renderList();
    });
})(window, window.jQuery);
