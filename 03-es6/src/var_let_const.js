var a = 1;
var a = 22;

// 값을 바꿀 수 있음, 재선언 불가
let b = 1;
b = 22;
// {
//     let b = 33;
//     let b222 = 'b222';
//     console.log('b', b);
//     console.log('b222', b222);
// }
console.log('b', b);

// 값을 바꿀 수 없음, 재선언 불가
const c = 1;
// c = 22;

// 배열 / 오브젝트 - 레퍼런스 타입.. - Object.freeze
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
const DAY_NAMES = Object.freeze(['월', '화']);
// DAY_NAMES[1] = '바꿈';

console.log(a, b, c, DAY_NAMES);

;(function () {
    console.log('var for');
    // var function scope
    for (var i = 0, leng = 5; i < leng; i++) {
        console.log(i);
        setTimeout(function() {
            console.log('var timeout', i);
        }, i * 1000);

        // (function(index) {
        //     console.log('index', index);

        //     setTimeout(function () {
        //         console.log('var timeout', index);
        //     }, index * 1000);
        // })(i);
    }
})();

;(function () {
    console.log('let for');
    // let, const block scope
    for (let i = 0, leng = 5; i < leng; i++) {
        console.log(i);
        setTimeout(function() {
            console.log('let timeout', i);
        }, i * 1000);
    }
})();
