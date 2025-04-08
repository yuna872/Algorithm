function solution(word) {
  var answer = 0;

  const vowels = ["A", "E", "I", "O", "U"];
  let res = [];
  const getPermutaions = (fixed) => {
    if (fixed.length === 5) return;
    for (let i = 0; i < 5; i++) {
      const newFixed = fixed + vowels[i];

      res.push(newFixed);
      getPermutaions(newFixed);
    }
  };

  getPermutaions("");

  res.sort();

  return res.indexOf(word) + 1;
}

console.log(solution("AAAAE"));
console.log(solution("AAAE"));
console.log(solution("I"));
console.log(solution("EIO"));
