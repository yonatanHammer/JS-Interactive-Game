class Player {
    constructor() {
        this.hp = 100;
        this.name = "Jonny the brave";
        this.str = 10;
        this.x = 0;
        this.y = 0;

        console.log("check player ctor")
    }


    getHealth() {
        console.log(`${this.name}'s health is now ${this.hp}!`)

        return `${this.name}'s health is now ${this.hp}!`;
    }

    isAlive() {
        return this.hp !== 0;
    }

    reduceHealth(hp) {
        this.hp -= hp;
        if (this.hp < 0) {
            this.hp = 0;
        }
    }

    attack(opponent) {
        console.log(`${this.name} attacked ${opponent.name}!`);
        opponent.reduceHealth(this.str);
    }

    //battle
    battle(monster) {
        //battle until one of them is dead
        while (this.hp > 0 && monster.hp > 0) {

            this.attack(monster);
            monster.attack(this);
        }

        //print player and monster stats
        this.printStats();
        monster.printStats();
        //if player is dead
        if (this.hp === 0) {
            console.log("You lost!");
        } else {
            console.log("You won the battle!");
        }
    }


    usePotion(name) {
        if (name === "hp") {
            this.hp += 10;
            console.log(`${this.name}'s health is now ${this.hp}!`);
        } else if (name === "str") {
            this.str += 5;
            console.log(`${this.name}'s strength is now ${this.str}!`);
        }

    }

    getCoordinates() {
        return [this.x, this.y];
    }


    printStats() {
        console.log(`Name: ${this.name}\nHealth: ${this.hp}\nStrength: ${this.str}`);
    }
}