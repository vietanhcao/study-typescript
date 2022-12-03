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
