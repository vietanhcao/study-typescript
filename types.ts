const today = new Date();

const persion = {
	age: 23,
};

class Color {}
const color = new Color();

// function
const logNumber: (i: number) => void = (i: number) => {
	console.log(i);
};

const json = "{}";

const parserJson: { x: number } = JSON.parse(json);

let words: string[] = ["red", "green", "blue"];
let foundWords: number | boolean;

interface User {
	name: string;
	age: number;
}

// conditional type
type CheckUser<T> = T extends User ? T : T extends number ? number : never;

type Test13 = CheckUser<string>;

function test13<T>(arg: CheckUser<T>): T | number {
	return arg;
}

test13(4);

let arr = [];

function store(item: unknown) {
	arr.push(item);
}

type CallbackFn<T> = (item: T, index: number) => void;
class Arr<T> {
	forEach(callback: CallbackFn<T>) {
		// for (let i = 0; i < arr.length; i++) {
		// 	callback(arr[i])
		// }
	}
}

let te: Arr<number> = [1, 2, 3];


