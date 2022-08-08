T = 10

for t in range(1,T+1):
    count = int(input())
    arr = list(map(int,input().split()))

    while(count > 0):
        max_idx = arr.index(max(arr))
        arr[max_idx] -= 1
        
        min_idx = arr.index(min(arr))
        arr[min_idx] += 1

        count -=1

    print(f'#{t} {max(arr)-min(arr)}')