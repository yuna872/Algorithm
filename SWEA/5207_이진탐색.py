import sys
sys.stdin = open('5207_input.txt', 'r')

T = int(input())

def binarySearch(A, low, high, key):
    global r, l, check

    if low > high:
        return

    mid = (low + high) // 2

    if A[mid] == key:
        return 1

    if A[mid] > key:
        binarySearch(A, low, mid-1, key)

    else:
        binarySearch(A, mid+1, high, key)


for test_case in range(1,T+1):
    N, M = map(int, input().split())

    A = list(map(int, input().split()))
    A.sort()

    B = list(map(int, input().split()))

    cnt = 0
    for b in B:
        print(binarySearch(A, 0, N-1, b))




    print(f'#{test_case} {cnt}')


