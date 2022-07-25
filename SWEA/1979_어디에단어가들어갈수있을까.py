T = int(input())

for t in range(T):
    N, K = map(int, input().split())
    
    # 배열과 가능한 공간 개수를 저장할 변수 선언
    count = 0
    garo_arr = []
    sero_arr = []

    for n in range(N):
        garo_arr.append(list(map(int,input().split())))
        sero_arr.append([])

    # 세로 방향 배열 만들기
    for j in range(N):
        for i in range(N-1,-1,-1):
                sero_arr[j].append(garo_arr[i][j]) 

    # 가로 방향으로 찾기
    for i in range(N-K+1):
        for j in range(N-K+1):
            if(garo_arr[i][j : j+K] == [1]*K):
                count += 1
    
    # 세로 방향으로 찾기
    for i in range(N-K+1):
        for j in range(N-K+1):
            if(sero_arr[i][j : j+K] == [1]*K):
                count += 1
    
    print(f'#{t+1} {count}')
