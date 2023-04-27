function solution(n)
{
    var answer = 0;
    const number = String(n)

    answer = [...number].reduce((sum, s) => sum + Number(s) ,0)

    return answer;
}