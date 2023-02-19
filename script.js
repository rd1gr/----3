// Задание 1
// Создайте функцию которая возводит переданное 
// число в куб, необходимо вывести в консоль 
// результат 2^3 степени + 3 ^ 3 степени

// function getCube (num) {
//     let res = num*num*num;
//     return res;
// }
// console.log(getCube(2) + getCube(3));
   

// function getCube (num) {
//     return Math.pow(num,3);
// }
// console.log(getCube(2)+getCube(3));

// Задание 2
// Пользователь вводит с клавиатуры число, если 
// ввёл текст, необходимо вывести что значение 
// задано неверно.
// Создать фукнцию, которая высчитывает 13% от 
// данного числа и выводит в консоль текст 
// "Размер заработной платы за вычетом налогов 
// равен значение"


// const salary = (money) =>{
//     money = money*0.87;
//     return money;
// }
// const userMoney = Number(prompt('введите размер заработной платы'));
// console.log(`Размер заработной платы за вычетом
// налогов  равен ${salary(userMoney)}`);
// function getSalary () {
//     let userMoney = (Number(prompt('введите  размер заработной платы')));
//     if (isFinite(userMoney) === true) {
//         let res = userMoney*0.87;
//         return console.log(`Размер заработной платы за вычетом налогов равен ${res}`);
//     }
//     return console.log(`неверно только цифры`);
//     }
//     getSalary();


// Задание 3
// Пользователь с клавиатуры вводит 3 числа, 
// необходимо создать функцию, которая определяет 
// максимальное значение среди этих чисел


// let num1 = Number(prompt("Введите первое число"));
// let num2 = Number(prompt("Введите второе число"));
// let num3 = Number(prompt("Введите третье число"));

// function compareNumber(num1, num2, num3) {
//     let max = Math.max(num1, num2, num3);
//     console.log(`максимальное значение ${max}`);
// }
// compareNumber(num1, num2, num3);

// Задание 4
// Необходимо реализовать четыре функции, каждая
//  функция должна принимать по два числа и 
//  выполнять одну из операций (каждая функция 
// выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула 
// число, например выражение console.log(sum(2, 6));
//  должно вывести число 8 в консоль (sum - функция 
// сложения в данном примере, ваши названия функций
//  могут отличаться). Округлять значения, которые 
//  возвращают функции не нужно, однако, обратите 
//  внимание на разность, функция должна вычесть из 
//  большего числа меньшее, либо вернуть 0, если 
//  числа равны. Функциям всегда передаются 
//  корректные числа, проверки на NaN, Infinity 
//  делать не нужно.

let num1 = Number(prompt("Введите первое число: "));
let num2 = Number(prompt("Введите второе число"));

function sumNumber(num1, num2) {
    let sum = num1 + num2;
    return console.log(`Сумма чисел равна ${sum}`)
}

function differenceNumber(num1, num2) {
    let difference = (num1 < num2) ? num2 - num1 : num1 - num2;
    return console.log(`Разница чисел  равнo ${difference}`);
}

function multiplicationNumber(num1, num2) {
    let multiplication = num1 * num2;
    return console.log(`Умножение чисел равнo ${multiplication}`);
}
function divisionNumber(num1, num2) {
    let division = num1 / num2;
    return console.log(`Частное чисел равнo ${division}`);
}

sumNumber(num1, num2);
differenceNumber(num1, num2);
multiplicationNumber(num1, num2);
divisionNumber(num1, num2);