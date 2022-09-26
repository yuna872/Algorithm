import sys
sys.stdin = open('5207_input.txt', 'r')

T = int(input())

def binarySearch(A, low, high, key):
    if low > high:
        return

    mid = (low + high) // 2

    if A[mid] == key:
        if low == 0 and high == N-1:
            return 1

        if visited == [1, 1]:
            return 1

        return 0

    if A[mid] > key:
        visited[0] = 1
        binarySearch(A, low, mid-1, key)

    else:
        visited[1] = 1
        binarySearch(A, mid+1, high, key)


for test_case in range(1,T+1):
    N, M = map(int, input().split())

    A = list(map(int, input().split()))
    A.sort()

    B = list(map(int, input().split()))

    cnt = 0
    for b in B:
        visited = [0] * 2
        if binarySearch(A, 0, N-1, b):
            cnt += 1




    print(f'#{test_case} {cnt}')


