
// 1.   Функция – калькулятор. Получает 3 аргумента: первый операнд, оператор (+, -, *, /), второй операнд. 
// Если операнды не являются числами, функция выбрасывает исключение. 
// Если передан неизвестный оператор – функция выбрасывает исключение. 
// Возвращает результат операции.

function calculate(a, op, b) {

    if(isNaN(a) || isNaN(b)) {
        throw "NaN";
    }

    let res;
        
    switch(op) {
        case "+":
            res = parseFloat(a) + parseFloat(b);
            break;
        case "-":
            res = parseFloat(a) - parseFloat(b);
            break;
        case '*':
            res = parseFloat(a) * parseFloat(b);
            break;
        case '/':
            res = parseFloat(a) / parseFloat(b);
            break;
        default:
            throw "unknown operator";
    }

    return res;
    
}

console.log(calculate(10, "+", "5")); //15


// 2.	Функция получает первым параметром массив, каждый элемент которого является строкой. 
// Вторым параметром подстроку для поиска. 
// Возвращает количество элементов массива, которые содержат переданную подстроку.

function countSubstr(strArray, substr) {
    return strArray.filter(el => el.indexOf(substr) > -1).length;
}

console.log(countSubstr(["aab", "baba", "xan"], "x")); //1


// 3.	Функция получает число и возвращает строку с отформатированным значением вида «(-) 00 000 000,00». 
// Разделитель разрядов – пробел, разделитель целой и дробной части - запятая. 
// Количество знаков после запятой – от 0 до 2-х.

function formatNumber(num) {
    let res = "";
    let sign = num >= 0 ? "" : "- ";
    let absNum = Math.abs(num);
    let strNum = absNum.toString();
    let ceil = Math.trunc(absNum);
    let ceilStr = ceil.toString();
    let mantissa = "." + (strNum.split(".")[1] > 0 ? strNum.split(".")[1] : "");
    let formattedMantissa = (mantissa.length > 2 ? parseFloat(mantissa).toFixed(2) : (mantissa.length == 2 ? parseFloat(mantissa).toFixed(1) : ".")).split(".")[1];

    let firstTriple = ceilStr.slice(0, ceilStr.length % 3);
    let arr = ceilStr.substr(ceilStr.length % 3, ceilStr.length).match( /\d{1,3}/g );
    firstTriple.length > 0 ? arr.unshift(firstTriple) : null;

    arr[arr.length - 1] = arr[arr.length - 1] + (formattedMantissa ? "," + formattedMantissa : ""); //add mantissa to last triple

    res += sign + arr.reduce((acc, value) => acc += " " + value);
    return res;
}

console.log(formatNumber(-1212624243241.1356)); //- 1 212 624 243 241,14