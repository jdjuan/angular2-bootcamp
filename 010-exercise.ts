const LEFT = 0;
const RIGHT = 1;

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

    move(direction: number) { 
        switch (direction) { 
            case LEFT:
				console.log("Going left");
                break;
            case RIGHT:
				console.log("Going right");
                break;
        }        
    }
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