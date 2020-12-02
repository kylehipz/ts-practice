import { Sorter } from './sorter';
import { NumbersCollection } from './numbers-collection';
import { CharacterCollection } from './char-collection';
import { LinkedList } from './linked-list';

const numCollection = new NumbersCollection([29, -5, 1, 77]);
numCollection.sort();
console.log(numCollection.data);

const charCollection = new CharacterCollection('dominador');
charCollection.sort();
console.log(charCollection.data);

const linkedList = new LinkedList();
linkedList.add(77);
linkedList.add(-5);
linkedList.add(29);
linkedList.add(1);
linkedList.sort();
linkedList.showData();
