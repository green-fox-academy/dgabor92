import Armada from './armada';

class WarApp {
  armada1: Armada;
  armada2: Armada;

  constructor() {
    this.armada1 = new Armada();
    this.armada2 = new Armada();
  }

  war() {
    return this.armada1.war(this.armada2);
  }
}

let háború = new WarApp();

console.log(háború.war());
