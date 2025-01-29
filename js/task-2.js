class Storage {
  #items;
  constructor(parameters) {
    this.#items = parameters;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    /* Перший варіант
   this.#items = this.#items.filter((item) => item !== itemToRemove); */

    /* Другий варіант */
    const removeItemIndex = this.#items.indexOf(itemToRemove);
    if (removeItemIndex !== -1) {
      this.#items.splice(removeItemIndex, 1);
    }
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
