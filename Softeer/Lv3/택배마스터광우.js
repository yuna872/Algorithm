const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
}).on("close", () => {
  const permutation = (arr, num) => {
    if (arr.length === 1) return [arr];
    const res = [];

    arr.forEach((v, idx, arr) => {
      const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
      const permutations = permutation(rest, num - 1);
      const attach = permutations.map((permutation) => [v, ...permutation]);
      res.push(...attach);
    });
    return res;
  };

  const [N, M, K] = input[0];
  let minV = Infinity;
  // 현재 레일로 만들 수 있는 모든 순열을 구하기
  const permutations = permutation(input[1], N);
  // 모든 경우를 순회
  permutations.forEach((arr) => {
    // 무게의 총 합
    let sumV = 0;
    // 인덱스를 저장할 변수
    let now = 0;
    // K번 일하기
    for (let i = 0; i < K; i++) {
      let bucket = 0;
      while (true) {
        // 바구니에 담기
        bucket += arr[now];
        // 레일이 반복되므로 나머지 연산
        now = (now + 1) % N;
        // 다음 레일의 상자를 담았을 때 M을 초과하면 break
        if (bucket + arr[now] > M) break;
      }
      // 택배 바구니의 무게 더해주기
      sumV += bucket;
    }
    // 최소한의 무게를 구하기
    minV = Math.min(minV, sumV);
  });

  console.log(minV);
});
