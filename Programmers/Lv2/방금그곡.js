function solution(m, musicinfos) {
  var answer = [];
  musicinfos.map((musicinfo) => {
    let [start, end, name, melody] = musicinfo.split(",");

    let [startH, startM] = start.split(":").map((v) => Number(v));
    let [endH, endM] = end.split(":").map((v) => Number(v));

    melody = convertMelody(melody);

    const diff = Math.abs(endH * 60 + endM - (startH * 60 + startM));
    let played = melody;
    while (played.length < diff) {
      played += melody;
    }
    played = played.slice(0, diff);

    if (played.includes(convertMelody(m))) answer.push([diff, name]);
  });

  return answer.length
    ? answer.reduce(
        (longest, cur) => {
          return longest[0] >= cur[0] ? longest : cur;
        },
        [0, ""]
      )[1]
    : "(None)";
}

const convertMelody = (melody) => {
  return melody.replace(/(A|G|C|D|F|B)#/g, (_, str) => str.toLowerCase());
};
