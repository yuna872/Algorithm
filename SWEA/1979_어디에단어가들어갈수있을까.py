# 공간을 찾는 함수 정의
def find_space(N,K,arr):
    
    count = 0
    # 행을 바꾸기 위한 for문
    for i in range(N):
        j = 0
        
        # 한줄에 여러 공간이 있을 경우까지 포함하기 위해서 N번째 원소까지 반복
        while(j < N):
            # 데이터가 1인 인덱스 찾기
            while(j < N and arr[i][j] == 0):
                j += 1
            
            # 연속적인 1의 개수 모두 파악
            count_one = 0
            while(j < N and arr[i][j] == 1):
                count_one += 1
                j += 1
            
            # count_one이 K와 같으면 count++ 아니면 다시 돌아가
            if(count_one == K):
                count += 1
            else : continue
            
    # 단어가 들어갈 수 있는 공간의 개수 리턴        
    return count


# 테스트 케이스 입력
T = int(input())

for t in range(T):
    N, K = map(int, input().split())
    
    # 배열과 가능한 공간 개수를 저장할 변수 선언
    garo_arr = [list(map(int,input().split())) for _ in range(N)]
    sero_arr = [[] for _ in range(N)]

    # 세로 방향 배열 만들기
    for j in range(N):
        for i in range(N-1,-1,-1):
                sero_arr[j].append(garo_arr[i][j]) 
    
    # 함수 적용해서 count의 합 출력
    print(f'#{t+1} {find_space(N,K,garo_arr)+ find_space(N,K,sero_arr)}')
