class Storage {
  #items;
  constructor(parameters) {
    this.#items = parameters;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    return this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
     this.#items = this.#items.filter((item) => item !== itemToRemove);

    // const removeItemIndex = this.#items.indexOf(itemToRemove);
    // if (removeItemIndex !== -1) {
    //   this.#items.splice(removeItemIndex, 1);
    // }
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
