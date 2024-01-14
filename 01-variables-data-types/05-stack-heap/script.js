// Giá trị được lưu vào stack
const name = 'Nam';
const age = 19;

// Tham chiếu được lưu trong heap
const person = {
  name: 'Namdeptrai',
  age: 20,
};

let newName = name;
newName = 'Namdeptraivaio';

let newPerson = person;
newPerson.name = 'Namdeptrais1tg';

console.log(name, newName); 
console.log(person, newPerson); 

