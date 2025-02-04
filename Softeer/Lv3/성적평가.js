const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");

let N = +input.shift();
let scores = new Array(4).fill([]);
for (let i = 0; i < 3; i++) {
  scores[i] = input[i].split(" ").map(Number);
}

for (let n = 0; n < N; n++) {
  let sum = 0;
  for (let i = 0; i < 3; i++) {
    sum += scores[i][n];
  }

  scores[3].push(sum);
}

const getRank = (arr) => {
  const len = arr.length;
  let rank = new Array(len);

  arr
    .map((v, idx) => [v, idx])
    .sort((a, b) => b[0] - a[0])
    .forEach(([score, idx], index, sortedArr) => {
      // 앞 점수와 동일하면
      if (index > 0 && score === sortedArr[index - 1][0]) {
        rank[idx] = rank[sortedArr[index - 1][1]];
      } else rank[idx] = index + 1;
    });

  console.log(rank.join(" "));

  for (let i = 0; i < arr.length; i++) {}
};

scores.forEach((score) => {
  getRank(score);
});
