
  // function createArrayOfNumbers(min, max) {
  //   const numbers = [];
  //   // Change code below this line
  //   for ( i = min; i <= max; i += 1) {
  //     numbers.push(i)
  //     // numbers.push(min, max);
  //   }
  //   // Change code above this line
  //   return numbers;
    
  // }
  // console.log(createArrayOfNumbers(1, 3));
  // console.log(createArrayOfNumbers(14, 17));
  // console.log(createArrayOfNumbers(29, 34));
  // console.log(createArrayOfNumbers(1, 3));
  // console.log(createArrayOfNumbers(1, 3));

//   function filterArray(numbers, value) {
//     // Change code below this line
//     const newArray = []
//     for ( i = 0; i <= numbers.length; i += 1 ) {
//       if (numbers[i] > value) {
//         newArray.push(numbers[i]) 
//       }
//     }
//     return newArray
//    // Change code above this line
//  }
//  console.log(filterArray([1, 2, 3, 4, 5], 3));
//  console.log(filterArray([1, 2, 3, 4, 5], 4));
//  console.log(filterArray([1, 2, 3, 4, 5], 5));
//  console.log(filterArray([12, 24, 8, 41, 76], 38));
//  console.log(filterArray([12, 24, 8, 41, 76], 20));

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }

// console.log(checkFruit("plum"))
// console.log(checkFruit("mandarin"))
// console.log(checkFruit("pear")) 
// console.log(checkFruit("Pear")) 
// console.log(checkFruit("apple"))

// 

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const newArray = [];

//   for (let number of array1) {
//     if (array2.includes(number)) {
//       newArray.push(number)
//     }
//   }

//   return newArray
//  // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]))
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]))
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]))
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]))
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]))



// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (let item of order) {
//     total += item;
//   }

//   // Change code above this line
//   return total;
// }



// console.log(calculateTotalPrice([12, 85, 37, 4])) 
// console.log(calculateTotalPrice([164, 48, 291])) 
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])) 

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3))
// console.log(filterArray([1, 2, 3, 4, 5], 4))
// console.log(filterArray([1, 2, 3, 4, 5], 5))
// console.log(filterArray([12, 24, 8, 41, 76], 38))
// console.log(filterArray([12, 24, 8, 41, 76], 20))

// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// const numbers = [3, 11, 24, 31, 65, 81, 55]
// let total = 0

// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers)
//   const number = numbers[i];
  
//   if (number % 2 === 0) {
//     total += number;
//   }
  
// }
// console.log(total)
// 
// function getEvenNumbers(start, end) {
//   // Change code below this line
// let newArray = []
//  for (i = start; i < end; i += 1) {
   
//    if ( i % 2 === 0) {
//     newArray.push(i)
//    }
//  }

//  return newArray
//    // Change code above this line
//  }
// //   
//  console.log(getEvenNumbers(2, 5))
//  console.log(getEvenNumbers(3, 11))
//  console.log(getEvenNumbers(6, 12))
//  console.log(getEvenNumbers(8, 8))
//  console.log(getEvenNumbers(7, 7))


// function findNumber(start, end, divisor) {
//   // Change code below this line

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }

//   // Change code above this line
// }
// console.log(findNumber(2, 6, 5))
// console.log(findNumber(8, 17, 3))
// console.log(findNumber(6, 9, 4))
// console.log(findNumber(16, 35, 7))

// function includes(array, value) {
//   // Change code below this line
//   // let items = array
//   for (let item of array) {
//     if (item === value) { 
//       return true  
//     }
//   }
//   return false
//   // Change code above this line
// }
// console.log(includes([1, 2, 3, 4, 5], 3))
// console.log(includes([1, 2, 3, 4, 5], 17))
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"))
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"))
// console.log(includes(["apple", "plum", "pear", "orange"], "plum"))
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"))


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length -1];
// // Change code above this line
// console.log(ownerName, ownerPhone, ownerEmail, numberOfTags, firstTag, lastTag )

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {country: "Jamaica", city: "Kingston"};
// console.log(apartment)

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//   name,
//   price,
//   image,
//   tags,
//   // Change code above this line
// };
// console.log(product.name)
// console.log(product.price)
// console.log(product.image)
// console.log(product.tags)

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (let key in apartment) {
//   keys.push(key)
//   values.push(apartment[key]);
// }

// console.log(keys, values)

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
//   // Change code above this line
// }
// console.log(apartment)


// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Если это собственное свойство - выполняем тело if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }

//   // Если это не собственное свойство - ничего не делаем
// }

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   let newProps = []
//   for ( const key in object) {
//       if (object.hasOwnProperty(key)) {
//       newProps.push(key);
//     }
//     }
//   propCount += newProps.length
  
//   // Change code above this line
//   return propCount;
// }
// console.log(countProps({ name: "Mango", age: 2 }))
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }))

// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значение свойства
//   console.log(book[key]);
// }

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// console.log(keys)
// for (let key of keys) {
//   console.log(key)
//   console.log(apartment[key])
//   values.push(apartment[key])
// }
// console.log(values)


// function countProps(object) {
  // Change code below this line
  // for (const key in object) {
  //   if (object.hasOwnProperty(key)) {
  //     propCount += 1;
  //   }
  // }

  // return propCount;
  // Change code above this line

//   let propCount = 0;

//   const keys = Object.keys(object)
//   propCount += keys.length
//   return propCount
// }
// console.log(countProps({ name: "Mango", age: 2 }))
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }))


// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//     const employersSalary = Object.values(salaries)
//     console.log(employersSalary)
//     for (let item of employersSalary) {
//       console.log(item)
//       totalSalary += item
//     }
    
//   // Change code above this line
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }))
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }))

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line
for (let color of colors) {
 console.log(color) 
 hexColors.push(color.hex)
 rgbColors.push(color.rgb)
}

console.log(hexColors)
console.log(rgbColors)