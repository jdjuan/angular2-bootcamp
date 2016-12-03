# TypeScript Exercises

1. Create a function `bark()` that outputs a `string` passed in
2. Create a class `Dog` with three variables: `age`, `name` and `breed`
3. Add a constructor to the class `Dog` for the `name` parameter
4. Add access modifiers to the `Dog` class. And add the function `bark()` to the `Dog` class
5. Create the `Cat` class with the same parameters as the `Dog` class but with the `meow()` function
6. Create a `class` named `Animal` with `age and breed` variables. Make `Dog and Cat` inherit from it
7. Change to `bark() and meow()` functions to return the argument along with the `woof!` and `meow!` suffix respectively
8. Enforce `bark() and meow()` to return a string 
9. Create an `interface` named `Mammal` with the `hair` variable and the `growHair()` function. Make the `Dog and Cat` classes implement `Mammal` 
10. Define `constants` `LEFT` and `RIGHT` with any numeric value. Then, create a method in the class `Dog` called `move()` that takes in a `number` and uses a `switch` to determine what to do in each case.
11. Replace the constants using `Enums`.
12. Create the interface `Climb` with the method `climbTree()`. Then create two classes `Climbable` and `NotClimbable` that implement the interface.
13. Make the class `Animal` take another argument in the `constructor` of type `Climb` (The interface we just created).
14. Update the subclasses respectively in `super()` sending a new instance `Climbable` and `NotClimbable` for `Cat` and `Dog` respectively.