class Animal { 
    age: number;
    breed: string;
    constructor (public name: string) {}
}

class Dog extends Animal {

    constructor(public name: string) {
        super(name);
    }

    bark(sound: string) {
        console.log(sound);
    }
}

class Cat extends Animal {

    constructor(public name: string) {
        super(name);
    }

    meow(sound: string) {
        console.log(sound);
    }
}   	