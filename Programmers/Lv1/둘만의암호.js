function solution(s, skip, index) {
  var answer = "";

  let skip_arr = skip.split("").map((a) => a.charCodeAt());

  s.split("").forEach((a) => {
    let ascii = a.charCodeAt();
    let cnt = 0;
    while (cnt < index) {
      if (ascii === 122) ascii = 96;
      ascii++;
      if (!skip_arr.includes(ascii)) cnt++;
    }

    answer += String.fromCharCode(ascii);
  });

  return answer;
}

console.log(solution("aukks", "wbqd", 5));
