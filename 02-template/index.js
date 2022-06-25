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

        // var markup = '<div class="item">';
        // markup += '<p>이름: 어쩌고 저쩌고</p>';
        // markup += '<button>등급: 어쩌고 저쩌고</button>';
        // markup += '</div>';

        var markup = '';
        // falsy / truthy
        if (dataList.length) {
            for (var i = 0, length = dataList.length; i < length; i++) {
                markup += '<div class="item">';
                markup += '<p>이름: ' + dataList[i].name + '</p>';
                markup += '<button>등급: ' + dataList[i].level + '</button>';
                markup += '</div>';
            }
            // for (var i = 0; i < dataList.length; i++) {}
        } else {
            markup += '<div>';
            markup += '표시할 목록이 없습니다.';
            markup += '</div>';
        }

        $('.container').html(markup);
    }

    $(function() {
        renderList();
    });
})(window, window.jQuery);
