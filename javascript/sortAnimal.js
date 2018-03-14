// Consider the following class:
//
// var Animal = {
//     name: "Cat",
//     numberOfLegs: 4
// }
// Write a method that accepts a list of objects of type Animal, and returns a new list.
// The new list should be a copy of the original list, sorted first by the animal's number of legs,
// and then by its name.
//
// If null is passed, the method should return null. If an empty list is passed, it should return
// an empty list back.

const sortAnimal = (animal) =>
  (animal === null)
    ? null
    : animal.sort((a, b) => a.numberOfLegs - b.numberOfLegs)


console.log(
  sortAnimal([
    { name: "Cat", numberOfLegs: 4 },
    { name: "Snake", numberOfLegs: 0 },
    { name: "Dog", numberOfLegs: 4 },
    { name: "Pig", numberOfLegs: 4 },
    { name: "Human", numberOfLegs: 2 },
    { name: "Bird", numberOfLegs: 2 }])
);
