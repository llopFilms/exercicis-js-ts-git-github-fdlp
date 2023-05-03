"use strict";
//Basics de Ts
const message = "Hola nois";
message.toLowerCase();
console.log(message);
console.log("Hello world!");
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toLocaleDateString()}!`);
}
const date = new Date();
console.log(date);
greet("Brendan", date);
function getFavoriteNumber() {
    return 26;
}
console.log(getFavoriteNumber());
function printCoord(pt) {
    console.log(`Coordinates: ${pt.x}, ${pt.y}`);
}
printCoord({ x: 3, y: 23 });
function printName(obj) {
    return !obj.last
        ? `The name is ${obj.first}`
        : `The name is ${obj.first} ${obj.last}`;
}
console.log(printName({ first: "Brendan" }));
console.log(printName({ first: "Brendan", last: "Gonzalez" }));
const printId = (id) => id;
console.log(printId(22), printId("Hola"));
const printId2 = (id) => {
    return typeof id === "string" ? id.toUpperCase() : id + 5;
};
console.log(printId2(22), printId2("Hola"));
const welcomePeople = (people) => {
    return Array.isArray(people)
        ? `Welcome ${people.join(", ")} on board!`
        : typeof people === "string"
            ? `Welcome ${people} on board!`
            : `Welcome ${people} new people on board!`;
};
console.log(welcomePeople(["James", "Peter", "Sarah", "Noah"]));
console.log(welcomePeople("George"));
console.log(welcomePeople(25));
const getFirstThree = (element) => element.slice(0, 3).length;
console.log(getFirstThree([1, 2, 3, 4, 5]), getFirstThree("Hola"));
const addToList = (list, element) => {
    list.push(element);
    return list;
};
console.log(addToList(["a", "b", "c"], "d"));
const addToList2 = (list, element) => list.push(element);
console.log(addToList2(["a", "b", "c"], "d"));
const printId3 = (id) => {
    return typeof id === "string" ? id.toUpperCase() : id + 5;
};
console.log(printId3(22), printId3("HOla"));
const printCoord3 = (pt) => `Coordinates: ${pt.x}, ${pt.y}`;
console.log(printCoord3({ x: 3, y: 23 })); //retorna "Coordinates: 3, 23"
const printName2 = (obj) => { var _a; return `The name is ${obj.first} ${(_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`; };
console.log(printName2({ first: "Brendan" }));
console.log(printName2({ first: "Brendan", last: "Boomer" }));
const printText = (text, alignment) => `The text is ${text} and the alignment is ${alignment}`;
console.log(printText("Hola", "left"));
const printText2 = (dades) => `The text is ${dades.text} and the alignment is ${dades.alignment}`;
console.log(printText2({ text: "Hola", alignment: "center" }));
const compare = (a, b) => a > b ? 1 : a < b ? -1 : 0;
console.log(compare("Hola", "Hola"));
console.log(compare("Hola", "Adéu"));
console.log(compare("Hola", "Passi-ho-bé"));
const configure = (op) => `The width is ${!op.width ? op.auto : op.width}`;
console.log(configure({ width: 100 }));
console.log(configure({ auto: "auto" }));
