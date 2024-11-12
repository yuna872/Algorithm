function solution(todayStr, terms, privacies) {
  let today = new Date(todayStr);

  let termsDic = {};
  terms.forEach((term) => {
    let [type, month] = term.split(" ");
    termsDic[type] = Number(month);
  });

  return privacies
    .map((privacy, idx) => {
      let [date, type] = privacy.split(" ");
      let [year, month, day] = date.split(".").map(Number);

      let newMonth = month + termsDic[type];
      if (newMonth > 12) {
        year += 1;
        month = newMonth - 12;
      } else month = newMonth;

      if (day === 1) day = 28;
      else day -= 1;
      if (new Date(Date.UTC(year,month-1, day)) < new Date(today)) return idx + 1;
    })
    .filter((v) => v !== undefined);
}

console.log(
  solution(
    "2022.05.19",
    ["A 6", "B 12", "C 3"],
    ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]
  )
);
