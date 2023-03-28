const user = {
	name: "Reed",
	age: 28,
	isEnglishSpeaker: true,
};
const firstUser = {
	name: "Rmon",
	age: 22,
	isEnglishSpeaker: user.isEnglishSpeaker,
};
const secondUser = {
	...user,
};

console.log("user", user);
console.log("firstUser", firstUser);
console.log("secondUser", secondUser);

const user2 = {
	name: "Reed",
	age: 28,
};

const moreUserInfo = {
	age: 70,
	country: "USA",
};

const secondUser2 = {
	...user2,
	...moreUserInfo,
	computer: "MacBook Pro",
};
console.log("secondUser2", secondUser2);

const secondUser3 = {
	...moreUserInfo,
	computer: "Linux Pro",
	...user2,
};
console.log("secondUser3", secondUser3);

const numerets = [1, 2, 3, 4, 5];
const [first, second, ...others] = numerets;
console.log(first, second, others);

const numerets2 = [1, 2, 3, 4, 5];
const sum = (a, b, c, d, e) => a + b + c + d + e;
const sumOfNumbers = sum(...numerets2);
console.log(sumOfNumbers);
