import sys
sys.stdin = open('5207_input.txt', 'r')

T = int(input())


# 반복구조
def binarySearch(S, key):
    low = 0
    high = N - 1
    visited = ['*']

    while low <= high:
        mid = (low + high) // 2

        if S[mid] == key:
            return visited

        elif S[mid] > key:
            visited.append('l')
            high = mid - 1
        else:
            visited.append('r')
            low = mid + 1

    return -1


for test_case in range(1,T+1):
    N, M = map(int, input().split())

    A = sorted(list(map(int, input().split())))

    B = list(map(int, input().split()))

    cnt = 0
    for b in B:
        res = binarySearch(A, b)
        if res != -1 and 'rr' not in ''.join(res) and 'll' not in ''.join(res):
            cnt += 1


    print(f'#{test_case} {cnt}')


