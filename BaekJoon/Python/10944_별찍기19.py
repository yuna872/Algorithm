def star(n, p):
    if n == 1:
        arr[p][p] = '*'
        return

    l = 4 * n - 3

    # 테두리
    for i in [p, l+p-1]:
        for j in range(p, l+p):
            arr[i][j] = '*'
            arr[j][i] = '*'

    return star(n-1, p+2)


N = int(input())
lens = 4 * N - 3
arr = [[' '] * lens for _ in range(lens)]

star(N, 0)

for i in range(lens):
    for j in range(lens):
        print(arr[i][j], end='')
    print()