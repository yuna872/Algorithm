const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, l, r] = input.shift().split(" ").map(Number);
let board = input.map((v) => v.split(" ").map(Number));

const getCountries = () => {
  let countries = [];
  let visited = new Array(n).fill().map(() => new Array(n));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j]) {
        let queue = [[i, j]];
        visited[i][j] = true;
        let arr = [[i, j]];

        while (queue.length) {
          const [ii, jj] = queue.shift();
          for (let [di, dj] of [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0],
          ]) {
            const ni = ii + di;
            const nj = jj + dj;
            if (ni >= 0 && ni < n && nj >= 0 && nj < n && !visited[ni][nj]) {
              const diff = Math.abs(board[ni][nj] - board[ii][jj]);
              if (diff >= l && diff <= r) {
                queue.push([ni, nj]);
                visited[ni][nj] = true;
                arr.push([ni, nj]);
              }
            }
          }
        }

        countries.push(arr);
      }
    }
  }

  return countries;
};

const getAverage = (arr) => {
  let sumV = 0;
  for (let [i, j] of arr) {
    sumV += board[i][j];
  }

  return Math.floor(sumV / arr.length);
};

let day = 0;
while (true) {
  const countries = getCountries();
  if (countries.length === n * n) break;

  // 인구이동
  for (let country of countries) {
    const val = getAverage(country);

    for (let [i, j] of country) {
      board[i][j] = val;
    }
  }

  day++;
}

console.log(day);
