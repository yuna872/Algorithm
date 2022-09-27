import sys
sys.stdin = open('1992_input.txt', 'r')

def dfs(y, x, n):
    global result

    num =  arr[y][x]
    for i in range(y, y+n):
        for j in range(x, x+n):
            if arr[i][j] != num:
                result += '('
                for k in range(2):
                    for l in range(2):
                        dfs(y + k * n // 2, x + l * n // 2, n // 2)
                result += ')'
                return


    result += str(num)
    return

N = int(input())

arr = [ list(map(int, input())) for _ in range(N)]
result = ''

dfs(0, 0, N)
print(result)

