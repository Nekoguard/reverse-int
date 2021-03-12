module.exports = function reverse (n) {
    let str = String(n);
    let arr = str.split('').reverse(); // массив перевернут

    for (let elem of arr) {
        if (elem === '-') // если зашло отрицательное число
        arr.pop(); // т.к. массив перевернут то '-' оказывается в конце и отрезается
    }

    let result = arr.join('');

    return Number(result);
}
