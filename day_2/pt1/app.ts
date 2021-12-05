import fs from "fs";

const getArrayFromTextFile = (filePath: string) => {
  return fs.readFileSync(filePath).toString().split("\n");
};

const returnNumberFromString = (instr: string) => {
  const result = Number(instr.replace(/[^0-9.]/g, ""));
  return result;
};

const readSubmarineInstructions = (instructions: Array<string>) => {
  let depth = 0;
  let horizontal = 0;

  instructions.forEach((instruction) => {
    if (instruction.toLowerCase().includes("forward")) {
      horizontal += returnNumberFromString(instruction);
    } else if (instruction.toLowerCase().includes("down")) {
      depth += returnNumberFromString(instruction);
    } else if (instruction.toLowerCase().includes("up")) {
      depth -= returnNumberFromString(instruction);
    }
  });

  return depth * horizontal;
};

(async () => {
  const test = [
    "forward 5",
    "down 5",
    "forward 8",
    "up 3",
    "down 8",
    "forward 2",
  ];

  const inputs = getArrayFromTextFile(
    "/home/jonas/Documents/personal/AOC/day_2/pt1/inputs.txt"
  );

  console.log(readSubmarineInstructions(inputs));
})();
