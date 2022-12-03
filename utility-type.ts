// type Point = { x: number; y: number };
// type P = keyof Point;

// const b: P = "x";

// let s = "hello";
// let n: typeof s;

// declare function f1(): { a: number; b: string };

// type T0 = ReturnType<() => string>;

// let a: T0 = "hello";

type Colors = "red" | "blue" | "green";

// type ColorsArray = [0, 1, 2];

// type RGB = {
// 	red: ColorsArray[number];
// };

type MaximunColor = 256;

type ComputedRange<
	N extends number,
	Result extends Array<unknown> = [] // default start = 0
> = Result["length"] extends N
	? Result
	: ComputedRange<N, [...Result, Result["length"]]>;

// [0]
// extends equivalent to  ===

// array to union type
type RangeRGB = ComputedRange<MaximunColor>[number];

// chuyển union type thành key
type RGB = {
	[key in Colors]: RangeRGB;
};

let rgb: RGB = {
	red: 255,
	blue: 255,
	green: 0,
};

// type User = {
// 	name: string;
// 	company: {
// 		address: string;
// 	};
// };

// type Company = User["company"];

// enum giang {
// 	name = "viet",
// 	age = 102,
// }

// type TypeGiang = keyof typeof giang; // biến các key sáng union type 'apple' | 'banana'

// type Giang = Record<TypeGiang, number>;

const fruits = {
	apple: 1,
	banana: 3,
};

type FruitsUnion = keyof typeof fruits; // biến các key sáng union type 'apple' | 'banana'

type Fruits = Record<FruitsUnion, number>;

type FruitCount = {
	[key in keyof typeof fruits]: {
		[k2 in key]: number;
	};
}[FruitsUnion];

type Entity =
	| {
			type: "user";
	  }
	| {
			type: "post";
	  }
	| {
			type: "comment";
	  };

type EntityId = {
	[key in Entity["type"]]: {
		type: key;
	} & {
		// dùng & để dùng key2
		[key2 in `${key}Id`]: string; // template string??
	};
}[Entity["type"]]; // union type

const entityId: EntityId = {
	type: "post",
	postId: "123",
};

type StringTemplateType = `${Colors}-${RangeRGB}`;

let colorClass: StringTemplateType = "red-29";

// let giang = {
// 	name: "viet",
// 	company: {
// 		address: "123",
// 	},
// 	age: 12,
// };

// function pickValue<Obj, FirstKey extends keyof Obj>(obj: Obj, key: FirstKey) {
// 	return obj[key];
// }

// function omitValue<Obj, FirstKey extends keyof Obj>( // check type key có trong obj không
// 	obj: Obj,
// 	...key: FirstKey[]
// ): Omit<Obj, FirstKey> {
// 	const newObj = { ...obj };
// 	key.forEach((k) => delete newObj[k]);
// 	return newObj;
// }

// let aa = omitValue(giang, "name", "age");
// type PickPromise<T> = T extends Promise<infer U> ? U : T;

type PickPromise<Obj> = Obj extends Promise<infer R> ? R : never;

type Test = PickPromise<Promise<Colors>>;

type Par<Obj> = {
	[key in keyof Obj]?: Obj[key];
};

type ReturnTypeTest<T> = T extends (...args: any[]) => infer R ? R : never;

type Test1 = ReturnTypeTest<typeof document>;
