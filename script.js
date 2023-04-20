// task 1
// Напишите функцию которая принимает строку и заменяет все буквы “o” на  “a”
// “головоломка” --> "галаваламка"
// "мОлоток" --> "малатак"

// const letterRepl = (word, origin, change) => {
    
//     return word.replaceAll(origin, change)
// }

// console.log(letterRepl("головоломка", "о", "я"));

// task 2
// Напишите функцию которая принимает строку "           
// hello world.        " и удаляет отступы по краям

// const cut = (str) => {
//     return str.trim()
// }
// console.log(cut("     hello world        "));

// task 4 Вам дан массив: ['Аскар', 'Баяман', 'Калмамат']. Создайте функцию, изменяющую 
// букву а в каждом имени на я и выведите в консоль.

// const letterChange = (arr, first, second, firstUp, secondUp) => {
//     let str = arr.join()
//     return str.replaceAll(first, second).replaceAll(firstUp, secondUp).split(",")
          
// }

// console.log(letterChange(['Аскар', 'Баяман', 'Калмамат'], "а", "я", "А", "Я") );


// task 5 Напишите функцию, которая принимает строку и возвращает строку в алфавитном порядке.
// Пример:
// "qwertyu" --> "eqrtuwy"
// "dollar" --> "adllor"
// "banana" --> "aaabnn"

// const alphabet = (str) => {
//  return str.split("").sort().join("")
// }

// console.log(alphabet("sdjhgkggfhdtf"));

// task 6 Напишите функцию, которая разбивает строку и преобразует ее в массив слов.
// Пример:
// "Robin Singh" ==> ["Robin", "Singh"]
// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// const transform = (str) => {
//     return str.split(" ")
// }

// console.log(transform("ddfg ytyt y igyg"));

// task 7 Создайте функцию, которая принимает 2 целых числа в виде строк 
// входных данных и выводит сумму (также в виде строкии в качестве):
// Пример входных данных и то что должно выводится:
// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"

// const sum = (a, b) => {
    
//     return Number(a) + Number(b)

// }

// console.log(String(sum("8", "8")));

// task 8 Создайте функцию, которая принимает 2 целых числа в качестве входных данных и сравнивает их,
// если чилса равны, то выведите "равны", а иначе "не равны"

// const compare = (a, b) => {
//     return a === b ? "ravny" : "ne ravny"
// }

// console.log(compare(5, 6));

// task 9 Создайте функцию, которая принимает число. Составьте условие, по которому будет выводиться в консоль "Четное число", "Нечетное число". 

// const odd = (a) => {
//     return a % 2 === 0 ? "even" : "odd"
// }

// console.log(odd(5));