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
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals
    const itemTemplate = `
        <div class="item">
            <p>이름: {{name}}</p>
            <button>등급: {{level}}</button>
        </div>
    `;
    console.log(itemTemplate);


    if (dataList.length) {
        for (let i = 0, length = dataList.length; i < length; i++) {
            const data = dataList[i];
            // markup += itemTemplate
            //     .replace('{{name}}', data.name)
            //     .replace('{{level}}', data.level);
            markup += `
                <div class="item">
                    <p>이름: ${data.name}</p>
                    <button>등급: ${data.level}</button>
                </div>
            `;
        }
    } else {
        markup = `
            <div>
                표시할 목록이 없습니다.
            </div>
        `;
    }

    document.querySelector('.container').innerHTML = markup;
};

document.addEventListener('DOMContentLoaded', () => {
    // console.log('DOMContentLoaded'); 
    renderList();
});

// var a = 5;
// var b = 10;
// console.log(`Fifteen is ${a + b} and not ${a}.`);
