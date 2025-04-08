const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
let answer = [];
let keySet = new Set();
for (let i = 0; i < n; i++) {
  let words = input[i].split(" ");

  // 단축어로 지정 안되어있는 단어 찾기
  let flag1 = true;
  for (let j = 0; j < words.length; j++) {
    if (!keySet.has(words[j][0].toLowerCase())) {
      keySet.add(words[j][0].toLowerCase());
      words[j] = `[${words[j][0]}]${words[j].substring(1)}`;
      flag1 = false;
      break;
    }
  }

  // 모든 단어의 첫글자가 지정되었다면
  if (flag1) {
    // 왼쪽부터 차례대로
    let flag2 = false;
    for (let k = 0; k < words.length; k++) {
      for (let j = 0; j < words[k].length; j++) {
        if (!keySet.has(words[k][j].toLowerCase())) {
          keySet.add(words[k][j].toLowerCase());
          let newWord =
            words[k].substring(0, j) +
            `[${words[k][j]}]` +
            words[k].substring(j + 1);
          words[k] = newWord;
          flag2 = true;
          break;
        }
      }
      if (flag2) break;
    }
  }

  console.log(words.join(" "));
}
