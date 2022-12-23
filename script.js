const numOrStr = prompt('input number or string');
console.log(numOrStr);

let result;

switch (numOrStr) {
    case null:
        result = 'ви скасували';
        break;
    case numOrStr.trim() === '' && numOrStr:
        result = 'empty string';
        break;
    case isNaN(numOrStr) && numOrStr:
        result = 'number is Ba_NAN';
        break;
    default:
        result = 'ок';
}

console.log(result);
