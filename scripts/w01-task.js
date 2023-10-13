// 🔍 Part 1 error
//Originally was a constant, changed to a variable as the program will give an error if you try to change a constant.
let userName = "Moroni";
console.log(`Username: ${userName}`);
userName = "Moronihah";
console.log(`Username: ${userName}`);

// 🔍 Part 2 error
//Using the Date() object instead of DateTime which was undefined.
const currentDateAndTime = Date();
console.log(`It is now ${currentDateAndTime}`);

// 🔍 Part 3 error. The following statement calls a function named total that accepts any number of arguments and returns the sum. The returned value is stored in a variable named theTotal. 1-10 are the arguments.

let theTotal = total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(`The total is ${theTotal}`);

// 'total' function declaration
function total(...theNumbers) {
	let sum = 0;
	//Cannot loop in, as it iterates over the indices of the array, not the actual elements. So
	//It was changed to for .. of
	for (let aNumber of theNumbers) {
		sum += aNumber * 1; // Why do we use * 1? It implicitly converts a string to a number.
	}
	return sum
}
