const { singlyLinkedList } = require('./list/linkedlist.js');

const s1 = {
  name : 'vanderci',
  age  : 38
};

const s2 = {
  name : 'sarah',
  age  : 34
};

const s3 = {
  name : 'clara',
  age  : 11
};

// singlyLinkedList.addToTop(s1);
//
// singlyLinkedList.addToTop(s2);

singlyLinkedList.push(1, s1);

singlyLinkedList.push(2, s2);

singlyLinkedList.push(3, s3);

console.log(singlyLinkedList.findAll());
console.log(singlyLinkedList.count());

singlyLinkedList.remove(1);

console.log(singlyLinkedList.findAll());
console.log(singlyLinkedList.count());

console.log(singlyLinkedList.find(3));
