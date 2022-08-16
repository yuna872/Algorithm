# import sys
# sys.stdin = open('input.txt', 'r')

T = int(input())

for test_case in range(1, T+1):
    N, M = map(int, input().split())
    result = False
    arr = [input() for _ in range(N)]

    for i in range(N):
        # 가로 방향
        for col in range(N-M+1):
            st = col
            en = st + M - 1
            while st < en:
                if arr[i][st] == arr[i][en]:
                    st += 1
                    en -= 1
                else:
                    break

        if M % 2:
            if st == en:
                print(f'#{test_case} {arr[i][col:col + M]}')
                result = True
        else:
            if st == en+1:
                print(f'#{test_case} {arr[i][col:col + M]}')
                result = True

        if result == False:
            # 세로 방향
            for row in range(N - M + 1):
                st = row
                en = st + M - 1
                while st < en:
                    if arr[st][i] == arr[en][i]:
                        st += 1
                        en -= 1
                    else:
                        break

            if M % 2:
                if st == en:
                    print(f'#{test_case}', end=" ")
                    for j in range(row, row+M):
                        if j == row + M - 1:
                            print(arr[j][i])
                        else:
                            print(arr[j][i], end="")

            else:
                if st == en + 1:
                    print(f'#{test_case}', end=" ")
                    for j in range(row, row + M):
                        if j == row + M - 1:
                            print(arr[j][i])
                        else:
                            print(arr[j][i], end="")










