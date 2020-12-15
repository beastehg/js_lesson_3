// // Задача № 1
// let array = [1, 2, 3, "a", "b", "c", "4", "5", "6", "22"];
// let summ = 0;
// for (let key of array) {
// 	if (typeof key == "number" || !isNaN(key)) {
// 		summ += Number(key);
// 	}
// }
// alert(summ);

// // Задача № 2
// let array = [];
// for (let i = 0; i < 10; i++) {
// 	array[i] = (Math.floor(Math.random() * 1000) / 100) ** 5;
// 	console.log(array[i]);
// }


// // Задача № 3
// let array =  ["AngularJS", "jQuery"];
// array.unshift("Backbone.js");
// array.push("ReactJS","Vue.js");
// array[1] = "CommonJS";
// for (let i = 0; i < array.length; i++) {
// 	if (array[i] == "jQuery") {
// 		alert(array[i] + " будет удален это сдесь лишнее");
// 		array.splice(i,1);
// 	}
// }



// // Задача № 4
// let str = "Как однажды Жак звонарь сломал фонарь головой";
// let array = str.split(" ");
// array.splice(1,0,array[2]);
// array.splice(3,1);
// array.splice(2,0,array[3]);
// array.splice(4,1);
// array.splice(5,0,array[6]);
// array.splice(7,1);
// let newStr = array.join(" ");
//  alert(newStr);


// // Задача № 5
// let person = {
// 	"firstName": "Dima",
// 	"lastName": "Ykushev",
// 	"age": 29,
// };
// let user = prompt("Веди ключ");
// for (let key in person) {
// 	if (!(user in person)) {
// 		alert("Ключ = " + user + " не найден в обекте person");
// 		Object.assign(person, {
// 			[user]: prompt("Ключ не найнед и был добавлен", "Введите значение")
// 		});

// 	}
// }
// // console.log(Object.entries(person));


// // Задача № 6
// let phone = {
// 	brand: prompt("Бренд"),
// 	model: prompt("Модель телефона"),
// 	resolution: prompt("Разрешение"),
// 	color: prompt("Цвет"),
// };
// Object.assign(person, phone);
// console.log(Object.entries(person));


// // Задача № 7
// let dates = {
// 	firstDate: new Date(),
// 	secondDate: new Date(new Date().setDate(new Date().getDate() - 365)),
// };
// let user = new Date(prompt());

// if (user > dates.secondDate && user < dates.firstDate) {
// 	console.log("Попадает в диапазон дат обьектов");
// }




// // Задача № 8
// let arr = [];
// let summ = 0;
// for (let i = 0; i < 3; i++) {
// 	arr.push(arr[i] = prompt());
// 	summ += Number(arr[i]);
// }
// alert(summ);


// // Задача № 9
// let a = 0;
// let arr = [];
// for (let i = 1; i <= 10; i++) {
// 	arr.push([]);
// 	for (let j = 1; j <= 10; j++) {
// 		arr[i - 1].push(i + "x" + j + "=" + (i * j))
// 	}
// }
// console.log(arr);


// // Задача № 10
// let html = {
// 	img: {
// 		src: "https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
// 		alt: "",
// 		style: {
// 			border: "1px solid #ccc\" width=\"200\"",
// 		},
// 	},
// };
