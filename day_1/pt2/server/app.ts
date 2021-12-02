import fs from "fs";

const getArrayFromTextFile = (filePath: string) => {
  return fs.readFileSync(filePath).toString().split("\n");
};

const createChunkedArray = (arr: Array<any>, chunkSize: number) => {
  const temp: Array<Array<string>> = [];

  arr.forEach((val, i) => {
    temp.push([arr[i], arr[i + 1] ?? 0, arr[i + 2] ?? 0]);
  });

  return temp;
};

const getSumOfArray = (arr: Array<string>) => {
  const sum = arr.reduce((a, b) => Number(a) + Number(b), 0);
  return sum;
};

(async () => {
  const test = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
  let count = 0;
  const inputs = getArrayFromTextFile(
    "/home/jonas/Documents/personal/AOC/day_1/pt2/inputs.txt"
  );
  const chunckedArr = createChunkedArray(inputs, 3);
  chunckedArr.forEach((arr, i) => {
    const currentSum = getSumOfArray(arr);
    if (i > 0) {
      const prevSum = getSumOfArray(chunckedArr[i - 1]);
      if (prevSum < currentSum) {
        count += 1;
      }
    }
  });
  console.log(count);
})();
