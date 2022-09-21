import sys
sys.stdin = open('5188_input.txt', 'r')

def solve():
    i, j = 0, 0
    sumV = arr[0][0]

    ni, nj = 0, 0
    while (ni, nj) != (N-1, N-1):
        ri, rj = ni, nj+1
        ui, uj = ni+1, nj
        if 0 <= ri < N and 0 <= rj < N:
            ni, nj = ri, rj
        if 0 <= ui < N and 0 <= uj < N:
            if (ni, nj) == (ri, rj):
                if arr[ri][rj] > arr[ui][uj]:
                    ni, nj = ui, uj
            else:
                ni, nj = ui, uj

            print(arr[ni][nj], end= ' ')
            sumV += arr[ni][nj]

    return sumV


T = int(input())

for test_case in range(1, T+1):
    N = int(input())

    arr = [list(map(int, input().split())) for _ in range(N)]
    # print(arr)

    print(solve())
