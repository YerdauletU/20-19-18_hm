/*
1. Создайте функцию rgb(), которая будет принимать три числовых
аргумента и возвращать строку вида «rgb(23,100,134)». Если
аргументы не заданы, считать их равными нулю.
*/

// const rgb = (r = 0, g = 0, b = 0) => `rgb(${r}, ${g}, ${b})`;
// console.log(rgb(7, 8, 9));

/*
2. Создайте функцию avg() , которая будет принимать
неограниченное кол-во аргументов и находить среднее значение по
всем своим аргументам.
*/

// function avg() {
//     let count = 0;
//     Array.from(arguments).map(item => count += item);
//     console.log(count/ arguments.length);
// }
// avg(1, 2, 3, 4, 5, 6);

/*
3. Создайте функцию repeat(str, n), которая возвращает строку,
состоящую и n повторений строки str.
*/

// function repeat(word, num) {
//     let sentence = ``;
//     for(let i = 0; i < num; i++) {
//         (i < num - 1) ? sentence += word + " " : sentence += word;
//     }
//     return sentence;
// }
// console.log(repeat(`qwerty`, 3));