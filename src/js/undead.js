import Character from './app';

export default class Undead extends Character {
  constructor(name, type) {
    super(name, type);
    this.type = 'Undead';
    this.attack = 25;
    this.defence = 25;
  }
}

const undead1 = new Undead('Undead1', 'Undead');
console.log(undead1);
