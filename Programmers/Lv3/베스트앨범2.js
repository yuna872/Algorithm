function solution(genres, plays) {
  var answer = [];

  const playCounts = {};
  const NumbersOfMusic = {};

  for (let genre of genres) {
    if (!playCounts[genre]) playCounts[genre] = 0;
    if (!NumbersOfMusic[genre]) NumbersOfMusic[genre] = [];
  }

  for (let i = 0; i < genres.length; i++) {
    playCounts[genres[i]] += plays[i];

    NumbersOfMusic[genres[i]].push([i, plays[i]]);
  }

  const sortedGenres = Object.entries(playCounts)
    .sort(([key1, value1], [key2, value2]) => value2 - value1)
    .map(([key, value]) => key);

  for (let genre of sortedGenres) {
    NumbersOfMusic[genre].sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < 2; i++) {
      if (NumbersOfMusic[genre][i]) answer.push(NumbersOfMusic[genre][i][0]);
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
