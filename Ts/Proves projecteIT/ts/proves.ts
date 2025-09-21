//Basics de Ts
const message = "Hola nois";
message.toLowerCase();
console.log(message);

console.log("Hello world!");

function greet(person: string, date: Date) {
	console.log(`Hello ${person}, today is ${date.toLocaleDateString()}!`);
}

const date = new Date();
console.log(date);
greet("Brendan", date);

function getFavoriteNumber(): number {
	return 26;
}
console.log(getFavoriteNumber());

function printCoord(pt: { x: number; y: number }) {
	console.log(`Coordinates: ${pt.x}, ${pt.y}`);
}
printCoord({ x: 3, y: 23 });

function printName(obj: { first: string; last?: string }): string {
	return !obj.last
		? `The name is ${obj.first}`
		: `The name is ${obj.first} ${obj.last}`;
}
console.log(printName({ first: "Brendan" }));
console.log(printName({ first: "Brendan", last: "Gonzalez" }));

const printId = (id: number | string): number | string => id;
console.log(printId(22), printId("Hola"));

const printId2 = (id: number | string): number | string => {
	return typeof id === "string" ? id.toUpperCase() : id + 5;
};
console.log(printId2(22), printId2("Hola"));

const welcomePeople = (people: string[] | string | number): string => {
	return Array.isArray(people)
		? `Welcome ${people.join(", ")} on board!`
		: typeof people === "string"
		? `Welcome ${people} on board!`
		: `Welcome ${people} new people on board!`;
};
console.log(welcomePeople(["James", "Peter", "Sarah", "Noah"]));
console.log(welcomePeople("George"));
console.log(welcomePeople(25));

const getFirstThree = (element: number[] | string): number =>
	element.slice(0, 3).length;
console.log(getFirstThree([1, 2, 3, 4, 5]), getFirstThree("Hola"));

const addToList = (list: string[], element: string): string[] => {
	list.push(element);
	return list;
};
console.log(addToList(["a", "b", "c"], "d"));

const addToList2 = (list: string[], element: string): number =>
	list.push(element);
console.log(addToList2(["a", "b", "c"], "d"));

type Params = string | number;
const printId3 = (id: Params): Params => {
	return typeof id === "string" ? id.toUpperCase() : id + 5;
};
console.log(printId3(22), printId3("HOla"));

type Point = {
	x: number;
	y: number;
};
const printCoord3 = (pt: Point): string => `Coordinates: ${pt.x}, ${pt.y}`;
console.log(printCoord3({ x: 3, y: 23 })); //retorna "Coordinates: 3, 23"

const printName2 = (obj: { first: string; last?: string }) =>
	`The name is ${obj.first} ${obj.last?.toUpperCase()}`;
console.log(printName2({ first: "Brendan" }));
console.log(printName2({ first: "Brendan", last: "Boomer" }));

const printText = (text: string, alignment?: "left" | "center" | "right") =>
	`The text is ${text} and the alignment is ${alignment}`;
console.log(printText("Hola", "left"));

type Alignment = {
	text: string;
	alignment: "left" | "center" | "right";
};
const printText2 = (dades: Alignment) =>
	`The text is ${dades.text} and the alignment is ${dades.alignment}`;
console.log(printText2({ text: "Hola", alignment: "center" }));

const compare = (a: string, b: string): -1 | 0 | 1 =>
	a > b ? 1 : a < b ? -1 : 0;
console.log(compare("Hola", "Hola"));
console.log(compare("Hola", "Adéu"));
console.log(compare("Hola", "Passi-ho-bé"));

type Options = {
	width: number;
};
type Options2 = Options & {
	auto: string;
};
const configure = (op: Options2) =>
	`The width is ${!op.width ? op.auto : op.width}`;
console.log(configure({ width: 100 }));
console.log(configure({ auto: "auto" }));

