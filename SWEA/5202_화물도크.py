import sys
sys.stdin =  open('5202_input.txt', 'r')

'''
A : 정렬된 활동들의 집합
S : 선택된 활동들의 집합
s: 시작시간, f: 종료시간
'''
def selection(i, j):
    global S

    if i == j:
        return
    else:
        m = i + 1

        # 수행할 수 없는 시간의 작업이면
        while m < j and TT[i][1] > TT[m][0]:
            m += 1

        if m < j:
            S.append(TT[m])
            selection(m, j)


T = int(input())

for test_case in range(1, T+1):
    N = int(input())

    TT = [tuple(map(int, input().split())) for _ in range(N)]
    minC = 9999999

    # 두번째 원소로 오름차순 정렬하기
    TT.sort(key=lambda x:x[1])
    S = [TT[0]]

    selection(0, N)
    print(f'#{test_case} {len(S)}')