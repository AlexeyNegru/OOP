import Character from './app';

export default class Zombie extends Character {
  constructor(name, type) {
    super(name, type);
    this.type = 'Zombie';
    this.attack = 40;
    this.defence = 10;
  }
}

const zombie1 = new Zombie('Zombie1', 'Zombie');
console.log(zombie1);
