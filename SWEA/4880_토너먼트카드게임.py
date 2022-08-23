T = int(input())
# 가위바위보 하는 함수,,, 쳇 모르겠습니다.
def rsp(lw, rw):
    if (cards[lw] - cards[rw] == -1) or (cards[lw] - cards[rw] == 2):
        return rw
    else:
        return lw

# i와 j 영역에서 우승자의 위치를 return
def winner(i, j):
    # 영역의 데이터가 한개일 때
    if i == j:
        # 그 한개의 위치
        return i

    lw = winner(i, (i+j)//2)
    rw = winner((i+j)//2 + 1, j)

    return rsp(lw, rw)


for test_case in range(1, T+1):
    N = int(input())

    cards = list(map(int, input().split()))

    st = 0
    ed = N-1

    print(f'#{test_case} {winner(st, ed)+1}')
