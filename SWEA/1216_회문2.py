import sys
sys.stdin = open('input.txt', 'r')

def maxLen(arr):
    max_l = 0
    # 가장 긴 길이 부터 검사하기
    for l in range(100, 0, -1):
        for row in range(100):
            for st in range(100 - l + 1):
                if arr[row][st:st + l] == arr[row][st:st + l][::-1]:
                    if l > max_l:
                        max_l = l
                        break
    return max_l

for test_case in range(1, 11):
    N = int(input())

    arr = [list(input()) for _ in range(100)]
    garo = maxLen(arr)

    for i in range(100):
        for j in range(100):
            if i < j:
                arr[i][j], arr[j][i] = arr[j][i], arr[i][j]

    sero = maxLen(arr)

    if garo > sero:
        print(f'#{test_case} {garo}')
    else:
        print(f'#{test_case} {sero}')














