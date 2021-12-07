import fs from "fs";

const getArrayFromTextFile = (filePath: string) => {
  return fs.readFileSync(filePath).toString().split("\n");
};

const findBitOccurences = (
  arr: Array<string>,
  place: number,
  type: "most" | "least"
) => {
  let ones = 0;
  let zeros = 0;

  arr.forEach((number) => {
    const newNumber = number.split("").map((num) => Number(num));
    console.log(newNumber);

    if (newNumber[place] === 1) {
      ones += 1;
    } else {
      zeros += 1;
    }
  });
  if (type === "most") {
    if (ones > zeros) {
      return 1;
    } else {
      return 0;
    }
  } else {
    if (ones < zeros) {
      return 1;
    } else {
      return 0;
    }
  }
};

(async () => {
  const test = [
    "00100",
    "11110",
    "10110",
    "10111",
    "10101",
    "01111",
    "00111",
    "11100",
    "10000",
    "11001",
    "00010",
    "01010",
  ];

  const inputs = getArrayFromTextFile(
    "/home/jonas/Documents/personal/AOC/day_3/pt1/inputs.txt"
  );

  let gamma = "";
  let epsilon = "";

  const numberLength = inputs[0].length;

  for (let index = 0; index < numberLength; index++) {
    gamma += findBitOccurences(inputs, index, "most");
    epsilon += findBitOccurences(inputs, index, "least");
  }

  const powerConsumption = parseInt(gamma, 2) * parseInt(epsilon, 2);

  console.log(powerConsumption);
})();
