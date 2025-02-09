const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let N = input.length;
for (let n = 0; n < N; n++) {
  let [s, t] = input[n].split(" ");

  let i = 0;
  let j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      j++;
      i++;
    } else {
      j++;
    }
  }

  if (s.length === i) console.log("Yes");
  else console.log("No");
}
