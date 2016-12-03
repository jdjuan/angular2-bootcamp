enum Direction {
	Left,
	Right
}

interface Climb {
	climbTree();
}

class Climbable implements Climb {
	climbTree() {
		console.log("Getting on top of the tree!");
	}
}

class NotClimbable implements Climb {
	climbTree() {
		console.log("I can't :(");
	}
}

interface Mammal {
	hair: string;
	growHair(): void;
}

class Animal {
	age: number;
	breed: string;
	constructor(public name: string, public climb: Climb) { }
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

	move(direction: Direction) {
		switch (direction) {
			case Direction.Left:
				console.log("Going left");
				break;
			case Direction.Right:
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