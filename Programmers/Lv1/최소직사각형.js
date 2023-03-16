function solution(sizes) {
  let maxW = 0;
  let maxH = 0;
  const sorted = sizes.map((size) => {
    let tmp = size.sort((a, b) => {
      return a - b;
    });
    return tmp;
  });

  for (let size of sorted) {
    if (maxW < size[0]) maxW = size[0];
    if (maxH < size[1]) maxH = size[1];
  }

  return maxW * maxH;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
);
console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
);
