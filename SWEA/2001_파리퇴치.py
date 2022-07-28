T = int(input())

for t in range(T):
    N,M = map(int,input().split())
    arr = []
    # 원소 합계의 최댓값을 담을 변수 선언
    max_pari = 0
    
    # N x N 배열 입력받기
    arr = [list(map(int,input().split())) for _ in range(N)]

    for i in range(N-M+1):
        for j in range(N-M+1):
            sum = 0
            
            # M x M 행렬 원소의 합 sum에 누적하기
            for x in range(M):
                for y in range(M):
                    sum += arr[i+x][j+y]
                    
                    # sum이 max_sum보다 크다면 갱신
            if(sum > max_pari):
                max_pari = sum
            
    print(f'#{t+1} {max_pari}')



        



