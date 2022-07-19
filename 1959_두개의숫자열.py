T = int(input())

for t in range(T):
    N, M = map(int, input().split())
    short = list(map(int, input().split()))
    longer = list(map(int, input().split()))
    
    max_sum = 0 

    if(N > M):
        N , M = M, N
        short, longer = longer, short

    print(short)
    print(longer)

    for i in range(0,M-N+1):
        sum = 0
        for j in range(N):
            sum = sum + short[j]+longer[i+j]
        
        if(sum > max_sum):
            max_sum = sum
    
    print(f'#{t+1} {max_sum}')

    