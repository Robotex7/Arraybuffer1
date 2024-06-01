class Character {
  constructor(baseAttack) {
    this.baseAttack = baseAttack;
    this.stoned = false;
    this.distance = 1; // По умолчанию расстояние равно 1
  }

  get attack() {
    let attackAfterDistance = this.baseAttack * (1 - 0.1 * (this.distance - 1));
    if (this.distance > 5) {
      attackAfterDistance = this.baseAttack * 0.6;
    }
    if (this.stoned) {
      attackAfterDistance -= Math.log2(this.distance) * 5;
    }
    return Math.max(0, Math.round(attackAfterDistance));
  }

  set attack(value) {
    this.baseAttack = value;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  set distance(value) {
    this._distance = value;
  }

  get distance() {
    return this._distance;
  }
}

class Magician extends Character {}
class Daemon extends Character {}