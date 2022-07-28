T = int(input())

for t in range(T):
    A, B = map(int,input().split())

    if(A + B > 24):
        print(f'#{t+1} {(A + B) % 24}')
    elif( A + B == 24):
        print(f'#{t+1} 0')
    else :
        print(f'#{t+1} {A + B}')