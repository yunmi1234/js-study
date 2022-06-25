// ES5
// ;(function(win, $) {
//     function renderList() {
//         var dataList = [
//             {
//                 name: '어쩌고 저쩌고1',
//                 level: '어쩌고 저쩌고1'
//             },
//             {
//                 name: '어쩌고 저쩌고2',
//                 level: '어쩌고 저쩌고2'
//             }
//         ];

//         var markup = '';
//         var itemTemplate = [
//             '<div class="item">',
//                 '<p>이름: {{name}}</p>',
//                 '<button>등급: {{level}}</button>',
//             '</div>'
//         ].join('');
//         console.log(itemTemplate);

//         // falsy / truthy
//         if (dataList.length) {
//             for (var i = 0, length = dataList.length; i < length; i++) {
//                 var data = dataList[i];
//                 markup += itemTemplate
//                     .replace('{{name}}', data.name)
//                     .replace('{{level}}', data.level);
//             }
//             // for (var i = 0; i < dataList.length; i++) {}
//         } else {
//             markup = [
//                 '<div>',
//                     '표시할 목록이 없습니다.',
//                 '</div>'
//             ].join('');
//         }

//         $('.container').html(markup);
//     }

//     $(function() {
//         renderList();
//     });
// })(window, window.jQuery);

const renderList = () => {
    const dataList = [
        {
            name: '어쩌고 저쩌고1',
            level: '어쩌고 저쩌고1'
        },
        {
            name: '어쩌고 저쩌고2',
            level: '어쩌고 저쩌고2'
        }
    ];

    let markup = '';
    const itemTemplate = [
        '<div class="item">',
            '<p>이름: {{name}}</p>',
            '<button>등급: {{level}}</button>',
        '</div>'
    ].join('');
    console.log(itemTemplate);


    if (dataList.length) {
        for (let i = 0, length = dataList.length; i < length; i++) {
            const data = dataList[i];
            markup += itemTemplate
                .replace('{{name}}', data.name)
                .replace('{{level}}', data.level);
        }
    } else {
        markup = [
            '<div>',
                '표시할 목록이 없습니다.',
            '</div>'
        ].join('');
    }

    document.querySelector('.container').innerHTML = markup;
};

document.addEventListener('DOMContentLoaded', () => {
    // console.log('DOMContentLoaded'); 
    renderList();
});
