const _ = require('./symbolGenerator');

class ah {

  constructor(arr) {
    this.init(arr)
    this[_('input')] = arr
    this[_('output')] = []
  }

  init(arr) {
    this.copyOf(arr);
    this.startAt(0);
    this.endAt();
  }
  
  copyOf(arr) {
    this.input = Object.assign([], arr);
    return this;
  }

  startAt(index = 0) {
    this.startAt = index;
    return this;
  }

  endAt(index = this.input.length) {
    this.endAt = index;
    return this;
  }

  crop() {
    this.output = this.input.slice(this.startAt, this.endAt);
    return this;
  }

  values() {
    return this.output;
  }


}

module.exports = ah;