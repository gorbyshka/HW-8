const numOrStr = prompt('input number or string');
console.log(numOrStr);

switch (numOrStr) {
    case null:
        console.log('ви скасували');
        break;
    case ' ':
    case '':
        console.log('empty string');
        break;
    case !isNaN(numOrStr) || numOrStr:
        console.log('number is Ba_NAN');
        break;
    default:
        console.log('ok');
}
