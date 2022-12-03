interface User {
	name: string;
	age: number;
}

interface Company {
	address: string;
}

function deepClone<ABC extends object>(obj: ABC): ABC { //  ABC extends object để kiểm tra xem ABC có phải là object hay không
	return JSON.parse(JSON.stringify(obj));
}

const user: User = {
	name: "Giang",
	age: 20,
};

const test = deepClone(user);
