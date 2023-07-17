import Character from './app';

export default class Bowman extends Character {
  constructor(name, type = 'Bowman') {
    super(name, type);
    this.tape = 'Bowman';
    this.attack = 25;
    this.defense = 25;
  }
}

const bowman1 = new Bowman('Bowman1', 'Bowman');
console.log(bowman1);

