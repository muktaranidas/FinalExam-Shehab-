class Fruit {
  // Constructor
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  // Method to introduce the fruit
  intro() {
    console.log(`The fruit is ${this.name} and the color is ${this.color}.`);
  }
}
// Create instances of the Fruit class
const apple = new Fruit("Apple", "Red");
const banana = new Fruit("Banana", "Yellow");
// Call the intro method
apple.intro(); // Output: The fruit is Apple and the color is Red.
banana.intro(); // Output: The fruit is Banana and the color is Yellow.
