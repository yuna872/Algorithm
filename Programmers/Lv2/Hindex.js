// function solution(citations) {
//     var answer = 0;
//     const n = citations.length

//     citations.sort((a, b) => b - a)

//     const maxV = citations[0]

//     for(let i = maxV; i >= 0; i--) {
//         // i번 이상 인용된 논문의 수
//         let cnt = citations.filter((h) => h >= i).length
//         if(i <= cnt && n-cnt <= i) {
//             answer = i
//             break
//         }
//     }

//     return answer;
// }

function solution(citations) {
  let answer = 0;
  let n = citations.length;
  citations.sort((a, b) => b - a);

  let maxV = citations[0];
  for (let h = maxV; h >= 0; h--) {
    // h번 이상 인용된 논문의 수
    let cnt = citations.filter((v) => v >= h).length;
    // h번 이상 인용된 논문의 수가 h번 이상이고 나머지 논문의 수가 h이하
    if (cnt >= h && n - cnt <= h) {
      answer = h;
      break;
    }
  }

  return answer;
}

console.log(solution([3, 5, 1, 0, 6]));
