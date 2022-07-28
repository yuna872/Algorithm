T = int(input())

for t in range(T):
    N = int(input())

    # 이차원 배열 입력받기, join 함수를 사용하려고 str으로 받음
    arr = [list(input().split()) for _ in range(N)]

    # 빈리스트 생성
    arr_90 = [['0']*N for _ in range(N)]
    arr_180 = [['0']*N for _ in range(N)]
    arr_270 = [['0']*N for _ in range(N)]
    
    # 회전한 값 각 배열에 저장한다.
    for j in range(N):
        for i in range(N):
            arr_90[i][j] = arr[N-j-1][i]
            arr_180[i][j] = arr[N-i-1][N-j-1]
            arr_270[i][j] = arr[j][N-i-1]
    
    print(f'#{t+1}')
    for i in range(N):
        print(''.join(arr_90[i]),''.join(arr_180[i]),''.join(arr_270[i]))
        
    

    

