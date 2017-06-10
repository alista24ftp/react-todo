const add = (a, b) => a + b;
console.log(add(3, 1));

const toAdd = [9, 5];
console.log(add(...toAdd));

const groupA = ['John', 'Al'];
const groupB = ['Jesse'];
const final = [...groupB, 3, ...groupA];
console.log(final);

const person1 = ['John', 23];
const person2 = ['Allie', 41];
const print1 = (name, age) => {
  console.log(`Hi ${name}, you are ${age}`);
};
print1(...person1);
print1(...person2);

const names = ['Mike', 'Ben'];
const finalNames = ['John', ...names];
const print2 = (names) => {
  names.forEach((name) => {
    console.log('Hi ' + name);
  });
}
print2(finalNames);
