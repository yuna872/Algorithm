function solution(names, yearning, photos) {
  var answer = [];

  const missing = new Map();
  names.forEach((name, i) => {
    missing.set(name, yearning[i]);
  });

  photos.forEach((photo) => {
    let cnt = 0;
    photo.forEach((name) => {
      if (missing.has(name)) {
        cnt += missing.get(name);
      }
    });
    answer.push(cnt)
  });
  return answer;
}

console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
      ["may", "kein", "kain", "radi"],
      ["may", "kein", "brin", "deny"],
      ["kon", "kain", "may", "coni"],
    ]
  )
);
