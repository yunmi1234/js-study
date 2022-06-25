function fnc(e) {
    console.log('fnc', e, this);
}
// fnc();

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions
const arrowFnc = (e) => {
    console.log('arrowFnc', e, this);
}
// arrowFnc();

function fnc2() {
    console.log('fnc2', this, arguments);
}
// fnc2(1,2,3,4,5,6, [], {});

document.addEventListener('click', fnc);
document.addEventListener('click', arrowFnc);
