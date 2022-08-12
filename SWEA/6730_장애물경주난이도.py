T = int(input())

for t in range(T):
    N = int(input())
    
    blocks = list(map(int,input().split()))

    max_up = 0
    max_down = 0
    for i in range(N-1):
        # 올라갈 때
        if(blocks[i+1]-blocks[i] > max_up):
            max_up = blocks[i+1]-blocks[i]
        
        # 내려갈 때
        if(blocks[i]-blocks[i+1] > max_down):
            max_down = blocks[i]-blocks[i+1]
    
    print(f'#{t+1} {max_up} {max_down}')