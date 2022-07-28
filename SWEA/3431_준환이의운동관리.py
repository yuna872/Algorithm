T = int(input())

for t in range(T):
    L, U, X = map(int,input().split())

    if(X < L):
        print(f'#{t+1} {L-X}')
    elif( X > U) : 
        print(f'#{t+1} -1')
    else :
        print(f'#{t+1} 0')