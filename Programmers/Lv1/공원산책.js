function solution(park, routes) {
  const rows = park.length;
  const cols = park[0].length;

  const D = { N: [-1, 0], S: [1, 0], W: [0, -1], E: [0, 1] };

  let si = 0;
  let sj = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (park[i][j] === "S") {
        si = i;
        sj = j;
        break;
      }
    }
  }

  let ni = si;
  let nj = sj;
  routes.forEach((route) => {
    let ii = ni;
    let jj = nj;
    let [dir, step] = route.split(" ");
    step = Number(step);
    const [di, dj] = D[dir];
  
    while (step > 0) {
      if (
        0 <= ii + di &&
        ii + di < rows &&
        0 <= jj + dj &&
        jj + dj < cols &&
        park[ii + di][jj + dj] !== "X"
      ) {
        ii += di;
        jj += dj;
        step--;
      } else break;
    }

    if (step === 0) {
      ni = ii;
      nj = jj;
    }
  });

  return [ni, nj];
}

console.log(solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"]));
console.log(solution(["SOO", "OXX", "OOO"], ["E 2", "S 2", "W 1"]));
console.log(solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"]));
