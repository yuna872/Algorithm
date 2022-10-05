import sys
sys.stdin = open('1240_input.txt', 'r')

def findCode():
    for i in range(N-1, -1, -1):
        for j in range(M-1, -1, -1):
            if arr[i][j] == '1':
                return arr[i][j-55:j+1]

def scan():
    cnt = 1
    now = '0'
    i = 1
    while i < 56:
        if now != code[i]:
            p.append(cnt)
            cnt = 0
        else:
            cnt += 1
            now = code[i]
        i += 1
    return p

# pattern = {
#     [3, 2, 1, 1] : 0,
#     [2, 2, 2, 1] : 1,
#     [2, 1, 2, 2] : 2,
#     [1, 4, 1, 1] : 3,
#     [1, 1, 3, 2] : 4,
#     [1, 2, 3, 1] : 5,
#     [1, 1, 1, 4] : 6,
#     [1, 3, 1, 2] : 7,
#     [1, 2, 1, 3] : 8,
#     [3, 1, 1, 2] : 9,
# }

T = int(input())

for test_case in range(1, T+1):
    N, M = map(int, input().split())

    arr = [input() for _ in range(N)]

    code = findCode()
    p = []
    scan()
    print(p)



