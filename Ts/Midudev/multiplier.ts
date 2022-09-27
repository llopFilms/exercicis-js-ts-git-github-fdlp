const multiplicator = (a: number, b: number, printText: string) => {
  console.log(printText, a * b);
};

const parseArguments = (args): number[] => {
  if (args.length !== 4) throw Error("wrong number of arguments");

  const firstNumber = Number(args[2]);
  const secondNumber = Number(args[3]);

  if (!isNaN(firstNumber) && !isNaN(secondNumber))
    return [firstNumber, secondNumber];
  throw new Error("Proveded values are not numbers");
};

const cleanArguments = parseArguments(process.argv);

console.log(process.argv);
const a: number = Number(cleanArguments[0]);
const b: number = Number(cleanArguments[1]);

multiplicator(a, b, `Multiplica ${a} i ${b} i el resultat és:`);
