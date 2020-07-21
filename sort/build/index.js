"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RandomNumberArray_1 = require("./RandomNumberArray");
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
//Generators for random elements
var random = new RandomNumberArray_1.Random(100);
var randomNumbers = random.generateNumbers();
var randomString = random.generateString();
//Instanciation and sorting
//Number []
var numbersCollection = new NumbersCollection_1.NumbersCollection(randomNumbers);
numbersCollection.sort();
//String
var charactersCollection = new CharactersCollection_1.CharactersCollection(randomString);
charactersCollection.sort();
//Linked list
var linkedList = new LinkedList_1.LinkedList();
for (var i = 0; i < randomNumbers.length; i++) {
    linkedList.add(randomNumbers[i]);
}
linkedList.sort();
//Print
console.log(numbersCollection.data, charactersCollection.data);
linkedList.print();
