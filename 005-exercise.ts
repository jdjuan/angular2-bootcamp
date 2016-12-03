class Dog { 
    private age: number;
    private breed: string;

    constructor (public name: string) {}

    bark(sound: string) {
        console.log(sound);
    }
}

class Cat {
    private age: number;
    private breed: string;

    constructor (public name: string) {}

    meow(sound: string) {
        console.log(sound);
    }
}