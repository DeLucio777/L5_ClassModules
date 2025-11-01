class ToothDoctor extends Doctor {
  _specialization;

  constructor(name, age, isSurgeon, specialization = 'Общая стоматология') {
    super(name, age, isSurgeon);
    this._specialization = specialization;
  }

  get specialization() {
    this._checkDeleted();
    return this._specialization;
  }
  set specialization(value) {
    this._checkDeleted();
    this._specialization = value;
  }


  show() {
    this._checkDeleted();
    console.log(`Стоматолог: ${this._name}, Возраст: ${this._age}, Хирург: ${this._isSurgeon}, Специализация: ${this._specialization}`);
  }

  delete() {
    this._deleted = true;
    this._name = null;
    this._age = null;
    this._isSurgeon = null;
    this._specialization = null;
  }

  copy() {
    this._checkDeleted();
    return this;
  }

  static clone(dentistInstance) {
    if (!(dentistInstance instanceof Стоматолог)) {
      throw new Error('Аргумент должен быть экземпляром Стоматолог');
    }
    return new Стоматолог(
      dentistInstance._name,
      dentistInstance._age,
      dentistInstance._isSurgeon,
      dentistInstance._specialization
    );
  }
}