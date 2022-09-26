def star(n, p):
    if n == 1:
        arr[p][p] = '*'
        arr[p+1][p] = '*'
        arr[p+2][p] = '*'
        return

    g = 4 * n - 3
    s = 4 * n - 1

    for i in range(p, g + p):
        arr[p][i] = '*'
        arr[p + g + 1][i] = '*'
    for i in range(p, s + p):
        arr[i][p] = '*'
        arr[i][p + g - 1] = '*'

    arr[p + 1][p + g - 1] = ' '
    arr[p + 2][p + g - 2] = '*'

    return star(n - 1, p + 2)


N = int(input())

garo = 4 * N - 3
sero = 4 * N - 1

arr = [[' '] * garo for _ in range(sero)]
if N == 1:
    print('*')
else:
    star(N , 0)

    for i in range(sero):
        for j in range(garo):
            if i == 1:
                print(arr[i][j], end='')
                break
            print(arr[i][j], end='')
        print()