function solution(arr) {
  let answer = [0, 0];
  // 4개 영역으로 배열 나누기

  const divideArr = (row, col, len) => {
    let flag = true;

    for (let i = row; i < row + len; i++) {
      for (let j = col; j < col + len; j++) {
        if (arr[row][col] !== arr[i][j]) flag = false;
      }
    }

    // 압축 가능한 경우
    if (flag) answer[arr[row][col]] += 1;
    else {
      let half = len / 2;
      // 4개 배열로 나누기
      divideArr(row, col, half);
      divideArr(row + half, col, half);
      divideArr(row, col + half, half);
      divideArr(row + half, col + half, half);
    }
  };

  divideArr(0, 0, arr.length);

  return answer;
}

console.log(
  solution([
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
    [0, 1, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
  ])
);
