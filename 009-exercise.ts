interface Mammal {
	hair: string;
	growHair(): void;
}

class Animal {
	age: number;
	breed: string;
	constructor(public name: string) { }
}

class Dog extends Animal implements Mammal {

	hair: string;

	constructor(public name: string) {
		super(name);
	}

	bark(sound: string): string {
		return sound + " woof!";
	}

	growHair() {}

}

class Cat extends Animal implements Mammal {
	
	hair: string;

	constructor(public name: string) {
		super(name);
	}

	meow(sound: string): string {
		return sound + " meow!";
	}
	
	growHair() {}
}