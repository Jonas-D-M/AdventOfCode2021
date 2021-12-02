import fs from "fs";

const getArrayFromTextFile = (filePath: string) => {
  return fs.readFileSync(filePath).toString().split("\n");
};

const countIfPrevValIncreases = (arr: Array<any>) => {
  let count = 0;
  arr.forEach((input, index: number) => {
    if (Number(input) > Number(arr[index - 1]) && index > 0) {
      count += 1;
    }
  });
  return count;
};

(async () => {
  const test = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

  const inputs = getArrayFromTextFile(
    "/home/jonas/Documents/personal/AOC/day_1/inputs.txt"
  );
  console.log(countIfPrevValIncreases(inputs));
})();
