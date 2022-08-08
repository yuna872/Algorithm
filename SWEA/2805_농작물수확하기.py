T = int(input())

for t in range(1, T+1):
    N = int(input())
    arr = []

    for n in range(N):
        lst = list(input())
        arr.append(list(map(int,lst)))
    
    # 배열을 반으로 접는 과정
    arr_fold = [[arr[i][j]+arr[N-i-1][j] for j in range(N)] for i in range(N//2)]
    arr_fold.append(arr[N//2])

    sumV = 0
    
    # 원소를 하나씩 늘려가면서 N//2 번째 행까지 더하기
    # 여기서 col은 열의 수 이기보다는 덧셈을 시작할 포인트의 y좌표로 보아야 함
    col = N//2
    # 시작하는 열의 인덱스가 0일때 까지 덧셈
    while(col >= 0):
        for row in range((N//2)+1):
            sumV += sum(arr_fold[row][col : col+(2*row+1)])
            col -= 1

    print(f'#{t} {sumV}')




