const operations = ["add", "substract", "multiply", "divide"];
const calculator = (a: number, b: number, op: string) => {
  if (!operations.includes(op)) console.log("This operation is not supported");

  switch (op) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      if (b == 0) return "Cant divide by 0";
      else return a / b;
  }
};
console.log(calculator(1, 3, "add"));
console.log(calculator(1, 3, "substract"));

const calculator2 = (
  a: number,
  b: number,
  op: "add" | "substract" | "multiply" | "divide",
) => {
  switch (op) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      if (b == 0) return "Can't divide by 0";
      else return a / b;
  }
};
console.log(calculator2(1, 30, "add"));
console.log(calculator2(1, 30, "substract"));

type Operation = "add" | "substract" | "multiply" | "divide";
type Result = number;
const calculator3 = (a: number, b: number, op: Operation): Result => {
  switch (op) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      if (b == 0) throw new Error("Can't divide by 0");
      else return a / b;
  }
  throw new Error ("Operation is not supported");
};
console.log(calculator3(10, 30, "add"));
console.log(calculator3(10, 30, "substract"));
