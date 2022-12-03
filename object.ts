const profile = {
	name: "viet",
	age: 33,
	coords: {
		latitude: 12,
		longitude: 23,
	},

	setAge(age: number): void {
		this.age = age;
	},
};

const {
  name: nameAliases,
	coords: { latitude }
	
}: { coords: { latitude: number; longitude: number }; name: string } = profile;

console.log(nameAliases);
