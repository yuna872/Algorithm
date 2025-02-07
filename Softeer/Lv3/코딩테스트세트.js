const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, T] = input.shift().split(" ").map(Number);

const test = (sets, C, D) => {
  let S = new Array(N).fill(0);
  S[0] = C[0];
  for (let i = 0; i < N - 1; i++) {
    if (S[i] >= sets) S[i + 1] = C[i + 1] + D[i];
    else if (S[i] + D[i] >= sets) S[i + 1] = C[i + 1] + S[i] + D[i] - sets;
    else return false;
  }
  if (S[N - 1] >= sets) return true;
  else return false;
};

const bSearch = (start, end, C, D) => {
  if (start === end) return start;

  let mid = Math.floor((start + end + 1) / 2);

  if (test(mid, C, D)) return bSearch(mid, end, C, D);
  else return bSearch(start, mid - 1, C, D);
};

for (let t = 0; t < T; t++) {
  const C = new Array(N);
  const D = new Array(N - 1);
  const tmp = input[t].split(" ").map(Number);
  for (let i = 0; i < N - 1; i++) {
    C[i] = tmp[2 * i];
    D[i] = tmp[2 * i + 1];
  }
  C[N - 1] = tmp[2 * (N - 1)];

  console.log(bSearch(0, 2 * 10 ** 12, C, D));
}
