// 1.
// let item = ["Egg", 0.25, 12];

// let name = item[0];
// let price = item[1];
// let quantity = item[2];

// console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`);

// გადაწერეთ ეს კოდი ისე რომ მინიჭების მაგივრად გამოიყენოთ დესტრუქტურიზაცია
// let item = ["Egg", 0.25, 12];
// let [name, price, quantity] = item;
// console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`);
// 2. გადაწერეთ კოდი ისე რომ დესტრუქტურიზაციის შემდეგ ყველა ცვლადს შეესაბამებოდეს სწორი ციფრი ( one = 1)
// let numbers = [3, 5, 4, 2, 6, 1];

// let [one, two, three, four, five, six] = numbers;

// console.log(`One: ${one}, Two: ${two}, Three: ${three}, Four: ${four}, Five: ${five}, Six: ${six}`);
// let numbers = [3, 5, 4, 2, 6, 1, 15];
// let [one, two, three, four, five, six] = numbers.sort((a, b) => a - b);
// console.log(
//   `One: ${one}, Two: ${two}, Three: ${three}, Four: ${four}, Five: ${five}, Six: ${six}`
// );

//3
// დაასრულეთ კოდი იმისათვის რომ სწორად იმუშაოს

// let user = { name: "John", years: 30 };

// your code to the left side:
// let {} = user;

// console.log(name); // John
// console.log(age); // 30
// console.log(isAdmin); // false

// let user = { name: "John", years: 30 };
// let { name, years, isAdmin = "false" } = user;
// console.log(name);
// console.log(years);
// console.log(isAdmin);

// 4.
// გადაწერეთ კოდი ისე რომ მინიჭების მაგივრად გამოიყენოთ დესტრუქტურიზაცია
// let person = [12, "Chris", "Owen"];

// let firstName = person[1];
// let lastName = person[2];
// let age = person[0];

// console.log(`Person - Age: ${age}, Name: ${firstName} ${lastName}`);
// let person = [12, "Chris", "Owen"];
// let [age, firstName, lastName] = person;
// console.log(`Person-age: ${age}, Name:${firstName} ${lastName}`);

// 5.
// გადაწერეთ კოდი ისე რომ მინიჭების მაგივრად გამოიყენოთ დესტრუქტურიზაცია
// let person = ["Chris", 12, "Owen"];

// let firstName = person[0];
// let lastName = person[2];

// console.log(`Name: ${firstName} ${lastName}`);

// let person = ["Chris", 12, "Owen"];
// let [firstName, , lastName] = person;
// console.log(`Name: ${firstName} ${lastName}`);
// 6.
// დესტრუქტურიზაციით ამოიღეთ ბოლო სახელი სიიდან
// const students = ["Christina", "Jon", "Alexandare"];

// const [] = students;

// console.log(lastName);

// const students = ["Christina", "Jon", "Alexandare"];
// const [, , lastName] = students;
// console.log(lastName);

// 7.
// const moreStudents = ["Chris", ["Ahmad", "Antigoni"], ["Toby", "Sam"]];

// // Write your code here
// const [] = moreStudents;

// console.log(student1, student2, student3, student4, student5);
// მხოლოდ დესტრუქტურიზაციის გამოყენებით ამოიღეთ ყველა სახელი მასივიდან

// const moreStudents = ["Chris", ["Ahmad", "Antigoni"], ["Toby", "Sam"]];
// const [student1, [student2, student3], [student4, student5]] = moreStudents;

// console.log(student1, student2, student3, student4, student5);
