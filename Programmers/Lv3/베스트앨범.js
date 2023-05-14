function solution(genres, plays) {
  var answer = [];
  const n = genres.length;
  // 장르 : 총 재생횟수
  const genrePlay = {};
  // 장르 : [[앨범 고유번호, 해당 앨범의 재생횟수]]
  const hash = {};
  for (let i = 0; i < n; i++) {
    // 각 장르로 분류
    if (hash[genres[i]]) hash[genres[i]].push([i, plays[i]]);
    else hash[genres[i]] = [[i, plays[i]]];

    // 장르별 재생 횟수의 총합
    if (genrePlay[genres[i]]) genrePlay[genres[i]] += plays[i];
    else genrePlay[genres[i]] = plays[i];
  }

  // 장르 내에서 많이 재생된 노래를 먼저 수록
  for (let key of Object.keys(hash)) {
    hash[key] = hash[key].sort((a, b) => b[1] - a[1]);
  }

  // 리스트로 변환
  const sorted = [];
  for (let key of Object.keys(genrePlay)) {
    sorted.push([key, genrePlay[key]]);
  }
  // 장르별 재생 수가 많은 순서대로 정렬
  sorted.sort((a, b) => b[1] - a[1]);

  for (let item of sorted) {
    // 장르
    const genre = item[0];
    // 장르별 수록곡 리스트
    const musics = hash[genre];
    let i = 0;
    // 두번째 수록곡까지 베스트 앨범에 추가
    while (i < 2 && i < musics.length) {
      answer.push(musics[i][0]);
      i++;
    }
  }

  return answer;
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);
