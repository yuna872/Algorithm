N = int(input())

nth = 0
rest = 0

# 몇번째줄 + 나머지로 개수 세기
if(N == 1):
    print('1/1')

elif(N != 1):
    # range(1.N)으로 하면 틀렸습니다...ㅎ
    # 이왜안,,,,설명할 수 있으면 좋을 듯
    for i in range(1,N+1):
        if(N > i):
            N -= i
        else :
            nth = i
            rest = N
            break
    # 짝수/ 홀수일 때 나눠서 순회한다는 느낌
    if(nth % 2 == 0):
        print(f'{rest}/{nth-rest+1}')
    else :
        print(f'{nth-rest+1}/{rest}')




         