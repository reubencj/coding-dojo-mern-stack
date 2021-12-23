class Ninja {
  constructor(name, health) {
    this.name = name;
    this.health = health;
    this.speed = 3;
    this.strength = 3;
  }

  //   sayName() - log to the console the name of this Ninja instance
  // showStats() - log to the console all 4 attributes of this Ninja instance
  // drinkSake() - Add 10 to this Ninja instance health attribute

  sayName() {
    console.log(`name: ${this.name}`);
  }
  showStats() {
    console.log(
      `health: ${this.health} \nspeed: ${this.speed}\nstrength: ${this.strength}`
    );
  }
  drinkSnake() {
    this.health += 10;
  }
}

// const ninja1 = new Ninja("Hyabusa", 100);
// ninja1.sayName();
// ninja1.showStats();

class Sensei extends Ninja {
  constructor(name) {
    super(name, 200);
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
  }

  speakWisdom() {
    super.drinkSnake();
    console.log("fear of the lord is the beginning of wisdom");
  }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
