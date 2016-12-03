class Animal {
	age: number;
	breed: string;
	constructor(public name: string) { }
}

class Dog extends Animal {

	constructor(public name: string) {
		super(name);
	}

	bark(sound: string): string {
		return sound + " woof!";
	}
}

class Cat extends Animal {

	constructor(public name: string) {
		super(name);
	}

	meow(sound: string): string {
		return sound + " meow!";
	}
}   	