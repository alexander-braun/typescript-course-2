import { Random } from './RandomNumberArray';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

//Generators for random elements
const random = new Random(100);
const randomNumbers = random.generateNumbers();
const randomString = random.generateString();

//Instanciation and sorting
//Number []
const numbersCollection = new NumbersCollection(randomNumbers);
numbersCollection.sort();

//String
const charactersCollection = new CharactersCollection(randomString);
charactersCollection.sort();

//Linked list
const linkedList = new LinkedList();
for (let i = 0; i < randomNumbers.length; i++) {
  linkedList.add(randomNumbers[i]);
}
linkedList.sort();

//Print
console.log(numbersCollection.data, charactersCollection.data);
linkedList.print();
