def findseat():
    if K > R*C:
        return 0

    arr = [[0] * R for _ in range(C)]
    # 우 하 좌 상
    d = [[0, 1], [1, 0], [0, -1], [-1, 0]]

    i = 0
    j = -1
    n = 1
    while n <= R*C:
        for di, dj in d:
            # 숫자 입력할 수 있는 조건이면
            while 0 <= i + di < C and 0 <= j + dj < R and arr[i + di][j + dj] == 0:
                i = i + di
                j = j + dj
                arr[i][j] = n
                n += 1

    # 대기 번호와 맞는 자리 찾기
    for i in range(C):
        for j in range(R):
            if arr[i][j] == K:
                return [i+1, j+1]

C, R = map(int, input().split())

K = int(input())

ans = findseat()
if ans == 0:
    print(ans)
else:
    print(ans[0], ans[1])



