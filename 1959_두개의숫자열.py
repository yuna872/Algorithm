T = int(input())

for t in range(T):
    N, M = map(int, input().split())
    short = list(map(int, input().split()))
    longer = list(map(int, input().split()))
    
	# 가장 큰 sum을 저장하기 위한 변수
    max_sum = 0 
    
	# 앞 리스트가 더 길면 교체
    if(N > M):
        N , M = M, N
        short, longer = longer, short
		
		
    for i in range(0,M-N+1):
        sum = 0
        for j in range(N):
            sum = sum + short[j]*longer[i+j]
        
		# sum이 max_sum보다 큰 경우에는 max_sum에 저장해서 최댓값 저장
        if(sum > max_sum):
            max_sum = sum
    
    print(f'#{t+1} {max_sum}')

    