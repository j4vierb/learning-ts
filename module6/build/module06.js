"use strict";
/*  Module 6: DGenerics in TypeScript
    Lab Start */
/*  DataStore is a utility function that can store up to 10 string values in an array.
    Rewrite the DataStore class so the array can store items of any type.

    TODO: Add and apply a type variable. */
class DataStore {
    constructor() {
        this._data = new Array(10);
    }
    // methods
    AddOrUpdate(index, item) {
        if (index >= 0 && index < 10) {
            console.log(`update index ${index} with value ${item}`);
            this._data[index] = item;
        }
        else {
            console.error('Index is greater than 10');
        }
    }
    GetData(index) {
        if (index >= 0 && index < 10) {
            return this._data[index];
        }
        else {
            return;
        }
    }
}
let cities = new DataStore();
cities.AddOrUpdate(0, "Mumbai");
cities.AddOrUpdate(1, "Chicago");
cities.AddOrUpdate(11, "London"); // item not added
console.log(cities.GetData(1)); // returns 'Chicago'
console.log(cities.GetData(12)); // returns 'undefined'
// TODO Test items as numbers.
let numbers = new DataStore();
numbers.AddOrUpdate(0, 0);
numbers.AddOrUpdate(1, 1);
numbers.AddOrUpdate(11, 11);
let persons = new DataStore();
persons.AddOrUpdate(0, { "name": "A", "apellido": "B", "id": 0, "saldo": 29209.9 });
