function solution(record) {
  var answer = [];
  let user = {};
  record.forEach((item) => {
    const [status, uid, name] = item.split(" ");
    // 해당 아이디가 존재하지 않으면
    if(status !== 'Leave') user[uid] = name
  });

  record.forEach((item) => {
    const [status, uid, name] = item.split(" ");
    if(status === 'Enter') answer.push(user[uid]+'님이 들어왔습니다.')
    else if(status === 'Leave') answer.push(user[uid] +'님이 나갔습니다.')
  })
  
  return answer;
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Enter uid1235 Prodo",
    "Leave uid1235",
    "Change uid4567 Ryan",
  ])
);
