//При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно
let i = 5;
    while (i <= 10) {
        console.log(i);
        i++;
    }

/* При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...)
Когда цикл дойдет до числа 13 - остановить весь цикл */
for (let i = 20; i >= 10; i--) {
    if (i == 13) break;
    console.log(i);
}

//При помощи цикла for выведите чётные числа от 2 до 10 включительно
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0)
    console.log(i);
}

/* Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же
for (let i = 2; i <= 16; i++) {
    if (i % 2 == 0)
    console.log(i);
} */
let i = 2;
while (i <= 16) {
    if (i % 2 == 0) {
        console.log(i);
    } else {
        i++;
        continue;
    }
    i++;
}

//Заполните массив цифрами от 5 до 10 включительно
const arrayOfNumbers = [];
for (let i = 5; i < 11; i++) {
    arrayOfNumbers[i - 5] = i;
}

console.log(arrayOfNumbers);

//Заполните новый массив (result) числами из старого (arr). Должен получиться точно такой же массив
const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
}

console.log(result);

//Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++) {
if (typeof(data[i]) === 'number') {
    data[i] = data[i] * 2;
} else if (typeof(data[i]) === 'string') {
    data[i] = `${data[i]} - done`;}
} 

console.log(data);