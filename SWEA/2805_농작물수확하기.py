import sys
sys.stdin = open('input.txt', 'r')
T = int(input())

for t in range(1, T+1):
    N = int(input())
    arr = []

    for n in range(N):
        lst = list(input())
        arr.append(list(map(int, lst)))

    # 배열을 반으로 접는 과정
    arr_fold = [[arr[i][j]+arr[N-i-1][j] for j in range(N)] for i in range(N//2)]
    arr_fold.append(arr[N//2])

    sumV = 0

    # 원소를 하나씩 늘려가면서 N//2 번째 행까지 더하기
    # 여기서 col은 열의 수 이기보다는 덧셈을 시작할 포인트의 y좌표로 보아야 함
    col = N//2
    # 시작하는 열의 인덱스가 0일때 까지 덧셈
    while col >= 0 :
        for row in range((N//2)+1):
            sumV += sum(arr_fold[row][col : col+(2*row+1)])
            col -= 1

    print(f'#{t} {sumV}')

T = int(input())

for test_case in range(1, T+1):
    N = int(input())

    arr = [list(map(int, input())) for _ in range(N)]

    sumV = 0
    for i in range(N//2 + 1):
        for j in range(N//2-i, N//2+1+i):
            sumV += arr[i][j]

    for i in range(N//2 + 1, N):
        for j in range(N-i-1, )

    print(sumV)

# t = int(input())
# for case in range(1, t+1):
#     n = int(input())
#     arr = [list(input()) for _ in range(n)]
#     mid = n//2
#     total = 0
#     for i in range(n):
#         for j in range(n):
#             if i<mid:
#                 if mid-(i%mid)<=j and j<=mid+(i%mid):
#                     total += int(arr[i][j])
#             elif i==mid:
#                 total += int(arr[i][j])
#             elif i>mid:
#                 if i-mid<=j and j<=n-(i-mid)-1:
#                     total += int(arr[i][j])
#     print(f'#{case} {total}')
t = int(input())
for case in range(1, t+1):
    n = int(input())
    arr = [list(input()) for _ in range(n)]
    mid = n//2
    total = 0
    for i in range(n):
        for j in range(n):
            if i<mid:
                if mid-(i%mid)<=j and j<=mid+(i%mid):
                    print(i, j)
                    total += int(arr[i][j])
            elif i==mid:
                print(i, j)
                total += int(arr[i][j])
            elif i>mid:
                if i-mid<=j and j<=n-(i-mid)-1:
                    print(i, j)
                    total += int(arr[i][j])
    print(f'#{case} {total}')






