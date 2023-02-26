function solution(babbling) {
  var answer = 0;
  const available = ["aya", "ye", "woo", "ma"];

  for (let i in babbling) {
    let word = babbling[i];

    for (let j in available) {
      word = word.replace(available[j], "_");
    }

    // if (word.replaceAll("_", "") === "") {
    if (word.replace(/_/gi, "") === "") {
      answer += 1;
    }
  }

  return answer;
}

console.log(solution(["aya", "yee", "u", "maa", "wyeoo"]));
console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]));
