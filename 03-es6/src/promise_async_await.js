function process(callback) {
    console.log('회원 정보 인증 API 요청');
    setTimeout(function() {
        console.log('API 결과 값 전달 받음');
        callback();
    }, 1000 * 5);
}

function process2(callback) {
    console.log('회원 정보 인증 API 요청2');
    setTimeout(function() {
        console.log('API 결과 값 전달 받음2');
        callback();
    }, 1000 * 5);
}

// 콜백지옥
// https://hanamon.kr/javascript-%EC%BD%9C%EB%B0%B1-%EC%A7%80%EC%98%A5-%ED%83%88%EC%B6%9C%ED%95%98%EA%B8%B0-%EB%B9%84%EB%8F%99%EA%B8%B0-%EC%B2%98%EB%A6%AC-%EB%B0%A9%EB%B2%95/
// https://velog.io/@seul06/JavaScript-%EC%BD%9C%EB%B0%B1-%EC%A7%80%EC%98%A5
// process(function() {
//     console.log('값을 가지고 화면 처리');
//     process2(function() {
//         console.log('값을 가지고 화면 처리2');
//         process2(function() {
//             console.log('값을 가지고 화면 처리2');
//         });
//     });
// });


const promiseJob = () => {
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise
    return new Promise((resolve, reject) => {
        console.log('PROMISE 회원 정보 인증 API 요청');

        setTimeout(() => {
            console.log('PROMISE API 결과 값 전달 받음');
            // resolve();
            reject();
        }, 1000 * 5);
    })
}

// promiseJob()
// .then(() => {
//     console.log('PROMISE 깂을 가지고 화면 처리');
// }).catch(() => {
//     console.log('PROMISE 에러 발생');
// });

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function
;(async () => {
    console.log('async await');
    try {
        await promiseJob();
    } catch (e) {
        console.log('error..');
    }
    console.log('async await 값을 가지고 화면 처리');
})();
