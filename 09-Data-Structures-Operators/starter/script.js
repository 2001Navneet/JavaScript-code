'use strict';
// Navneet verma
// Data needed for a later exercise
const weekday = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHour = {
  [weekday[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },
  // here we cand do destructuring also we can define the default value
  orderDelivery: function ({
    time = '20:00',
    mainIndex = 0,
    starterIndex = 0,
    address,
  }) {
    console.log(time, address, starterIndex, mainIndex);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your delecious pasta with ${ing1},${ing2},${ing3}`);
  },
  // ES6 enhaced object literals syntax for methods
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
  // Es6 enhanced object literals
  openingHour,
  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },
};
restaurant.orderDelivery({
  time: '23:30',
  address: 'Panipat',
  mainIndex: 2,
  starterIndex: 1,
});
// destructring array and object
const [x, y, z] = restaurant.categories;
console.log(x, y, z);
// swaping value without using third variable
let [first, secondary] = restaurant.categories;
console.log(first, secondary);
[secondary, first] = [first, secondary];
console.log(secondary, first);
console.log(restaurant.order(2, 0));
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);
// what if we have a nested arrary
const nested = [2, 3, 5, [8, 9]];
const [p, q, r, [l, m]] = nested;
console.log(p, q, r, l, m);
// default values use when we don't know the length of the array or when we get datat from an api
const [A = 1, B = 1, C = 3] = [8, 9];
// destructuring objects **Property name must be same while destructuring the objects** and we hsave to use the {} bracket while destructuring the objects in objects order does not matter
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
// if we want different name then use :
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
//assining default values
const { menus = [], starterMenu: starters = [] } = restaurant;
console.log(menus, starters);
// mutating variable while destructing in objects
let a = 133;
let b = 83;
const obj = { a: 23, b: 34, c: 89 };
// ***Don't forget to wrap the below code in paranthesis ()
({ a, b } = obj);
console.log(a, b);
// nested destructuring in objects;
const {
  fri: { open, close },
} = openingHour;
console.log(open, close);
// practical application of destructing passing object as an argunment to the funtion when the number of parameter incereases then it become really dificult to handle such situation eg. at line no.18
// ******SPREAD OPERATOR (...) TO EXPAND AN ARRAY TO ALL ITS ELEMENT OR UNPACKING AN ARRAY
const array = [2, 3, 4];
console.log(...array); // else we have to use the loop 😂
// spreading the mainMenu array and also adding some new menu to the array this cand be possible with the help of spread operator
const newMenu = [...restaurant.mainMenu, 'chowmein', 'burger', 'matar paneer'];
console.log(...newMenu);
console.log(restaurant.mainMenu);
// copy array  shallow copy
const mainMenuCopy = [...restaurant.mainMenu];
// join 2 array
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);
// ****SPREAD OPERATOR NOT ONLY WORK ON ARRAY ONLY BUT IT ALSO WORK ON ALL ITERABLE  EXCEPT OBJECT ITERABLE ARE STRINGS,MAP,SET,ARRAY***
const str = 'Navneet';
const letter = [...str, '', 's'];
console.log(letter);
// console.log(`${...strt} verma`);  this is not a place where we want multiple value seperated by a , so  here we cannot use destructuring unexpected token error , multiple value seperated by a commas usually only accepted when we pass argument into a function or we built a new array
//REAL WORLD EXAMPLE
// const ingredient = [
//   prompt("Let's make pasta! ingredient 1?"),
//   prompt("Let's make pasta! ingredient 2?"),
//   prompt("Let's make pasta! ingredient 3?"),
// ];

// console.log(ingredient);
// restaurant.orderPasta(...ingredient);

// es 2018 we can also destructure an object usign the spread operator
const newRestaurant = { foundIn: 2005, ...restaurant, founder: 'Navneet' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'NavPizza';
console.log(restaurant.name);
console.log(restaurantCopy.name);

// REST PATTERN AND PARAMETERS it does the opposite of spread operator
// collect multiple element and condensed them into array it pack element into array
// *******SPREAD,BECAUSE ON THE RIGHT side of the =********

// below is the rest operator because on the left side of the =****
// NOte ...rest element must be the last element [a,b,...rest] like this
const [i, j, ...others] = [1, 2, 3, 4, 5];
console.log(i, j, others);
const [pizza, , resotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, resotto, otherFood);

// objects
const { sat, ...weekdays } = restaurant.openingHour;
console.log(sat, weekdays);

// fucntion we want any arbitary amount of parameter it should work by using the rest parameter
const add = function (...numbers) {
  // using the rest parameter
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
  console.log(numbers);
};

add(2, 3);
add(4, 5, 6);
console.log(add(3, 4, 5, 6, 9));
const v = [23, 5, 7];
console.log(add(...v)); // using spread
restaurant.orderPizza('mushroom', 'onionn', 'garlic', 'spinach');

// SHORT CIRCUITING && ||
// three important points about the logical operator && and ||
// use andy data type,return any data type, short-circuting
// OR || operator return the first true vlaue while short cirucuiting
console.log(3 || 'jonas');
console.log('' || 'bill');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'hello' || null); // as hello is first trulthy value so it will evaluate true and shortcircuit the rest part
restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);
const guest2 = restaurant.numGuests || 10;
console.log(guest2); // outuput is 23

console.log('--------AND-------');
// short circuitng using and opearator
// if any value is false in && operation then the whole operation we evaluate false
console.log(0 && 'Navneet');
console.log(8 && 'Verma');
console.log('hello' && 23 && null && 'Navneet'); //output is null whole result is false

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}
// using the short circuit property of && operator
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

//NULLISH COALESCING OPERATOR(??)
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); //  output is 10 ;as we can see that numGuest is 0 but due to short ciruting property of || operator output will be 10 which is a bug to avoid such issue we use NUllis coallescing operator syntax = ??
// Nullish value are null and undefined for ?? operator 0 and ' '  is not a falsy value infact it is truthy value;
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); // output 0;

// Logical assignment operator usage example
const res1 = {
  name: 'capri',
  // numGuests: 20,
  numGuests: 0,
};
const res2 = {
  name: 'PizzaHut',
  Owner: 'Mike tyson',
};
// res1.numGuests = res1.numGuests || 10;
// res2.numGuests = res2.numGuests || 10;
// to write the above two line of code in more concise way we use logical Assignment operator
res1.numGuests ??= 10;
res2.numGuests ||= 10;

res1.Owner = res1.Owner && '<Anonymous>';
res2.Owner = res2.Owner && '<Anonymous>';

// logical and operatro assign a value to a variable if it is currently trulthy
res1.Owner &&= '<Anonymus>';
res2.Owner &&= '<Anonymus>';
console.log(res1);
console.log(res2);
// Using the For of loop
for (const item of menu) {
  console.log(item);
}
// for getting index we use entries()
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
// now we use destructing to simplify the above code
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}:${el}`);
}
// Enhanced object literals***** in this section we have learn how to rewrite the method declaration in new way es6 and computing property of object e.g. weekday, and using openinghour property

// Optional chaining (?.)
// console.log(restaurant.openingHour.mon.open); // we can improve this code further using if statement like
if (restaurant.openingHour.mon) console.log(restaurant.openingHour.mon.open); // but this is not effiecient
// ES2020 provide optional chaining
console.log(restaurant.openingHour.mon?.open); // if the property before the question mark exits then only the mon property will be read if not then immediately undefined get returned if it is undefined or null then the result will be undefined
// we can use multiple optional chaining
console.log(restaurant.openingHour?.mon?.open);
// More real world example of optional chaining ?.
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// **********Imp point about object property when we wanna use variable as a object property then we have to use the [] brack notaion openingHour[day]
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHour[day]?.open ?? 'closed';
  console.log(`on ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'method does not exits');
console.log(restaurant.orderResotto?.(0, 1) ?? 'method does not exits');
// on Array we can use optional chaining on array to check whether array is empty or not
const users = [
  {
    name: 'navneet',
    email: 'navneet@58.com',
  },
];
console.log(users[0]?.name ?? 'user array empty');
// Looping Objects: Object keys. values. and entries
const properties = Object.keys(openingHour);
console.log(properties);
// Property Name
let openStr = `we are opn on ${properties.length} days`;

for (const day of Object.keys(openingHour)) {
  openStr += `${day},`;
  console.log(day);
}
// Property value
const values = Object.values(openingHour);
console.log(values);
// Entire Object
const entries = Object.entries(openingHour);
console.log(entries);
// [key,value] further we destructure the value object {open, close}
for (const [key, { open, close }] of entries) {
  console.log(x);
  console.log(`on ${key} we open at ${open} and close at ${close}`); // we can use destructing in place of x to get the string like this
}
