
module.exports = function symbolGenerator(key) {
    this.store = {} || this.store;
    if (!this.store.key) {
      this.store.key = Symbol(key)
    } 
    return this.store.key
  }


//   http://2ality.com/2016/01/private-data-classes.html