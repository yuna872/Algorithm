# 이진탐색 함수 정의
def binarySearch(page, key):
    start = 1
    end = page
    cnt = 0
    while start <= end:
        middle = int((start + end) / 2)
        cnt += 1
        if middle == key:
            return cnt
        elif middle > key:
            end = middle
        else:
            start = middle

T = int(input())

for test_case in range(1, T+1):
    P, A, B = map(int, input().split())

    if binarySearch(P, A) < binarySearch(P, B):
        result = 'A'
    elif binarySearch(P, A) > binarySearch(P, B):
        result = 'B'
    else :
        result = 0

    print(f'#{test_case} {result}')



