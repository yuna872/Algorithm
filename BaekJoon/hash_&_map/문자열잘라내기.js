const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [r, c] = input.shift().split(" ").map(Number);
const arr = input.map((v) => v.split(""));

let sample = [];
for (let j = 0; j < c; j++) {
  let str = "";
  for (let i = 0; i < r; i++) {
    str += arr[i][j];
  }

  sample.push(str);
}

let set = new Set();

let cnt = 0;
while (true) {
  for (let i = 0; i < c; i++) {
    let str = sample[i].slice(cnt, r);

    if (set.has(str)) {
      console.log(cnt - 1);
      process.exit();
    } else set.add(str);
  }
  cnt++;
}
