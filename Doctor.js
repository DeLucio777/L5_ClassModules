class Doctor {
  _name;
  _age;
  _isSurgeon;

  _deleted = false;

  constructor(name = 'Неизвестно', age = 30, isSurgeon = false) {
    this._name = name;
    this._age = age;
    this._isSurgeon = isSurgeon;
  }

  get name() {
    this._checkDeleted();
    return this._name;
  }
  set name(value) {
    this._checkDeleted();
    this._name = value;
  }

  get age() {
    this._checkDeleted();
    return this._age;
  }
  set age(value) {
    this._checkDeleted();
    if (typeof value === 'number' && value > 0) {
      this._age = value;
    } else {
      throw new Error('Возраст должен быть положительным числом');
    }
  }

  get isSurgeon() {
    this._checkDeleted();
    return this._isSurgeon;
  }
  set isSurgeon(value) {
    this._checkDeleted();
    this._isSurgeon = Boolean(value);
  }

  show() {
    this._checkDeleted();
    console.log(`Врач: ${this._name}, Возраст: ${this._age}, Хирург: ${this._isSurgeon}`);
  }

  delete() {
    this._deleted = true;
    this._name = null;
    this._age = null;
    this._isSurgeon = null;
  }

  copy() {
    this._checkDeleted();
    return this;
  }

  #promoteToSurgeon() {
    this._checkDeleted();
    this._isSurgeon = true;
  }

  promote() {
    this.#promoteToSurgeon();
  }

  _checkDeleted() {
    if (this._deleted) {
      throw new Error('Объект удалён и недоступен');
    }
  }

  static clone(doctorInstance) {
    if (!(doctorInstance instanceof Врач)) {
      throw new Error('Аргумент должен быть экземпляром Врач');
    }
    return new Врач(doctorInstance._name, doctorInstance._age, doctorInstance._isSurgeon);
  }
}
