def get_maxV_idx(arr):
    maxV = 0
    max_idx = 0
    for idx in range(len(arr)):
        if(arr[idx] > maxV):
            maxV = arr[idx]
            max_idx = idx

    return max_idx

def get_minV_idx(arr):
    minV = 101
    min_idx = 0
    for idx in range(len(arr)):
        if (arr[idx] < minV):
            minV = arr[idx]
            min_idx = idx

    return min_idx


T = 10

for t in range(1, T+1):
    count = int(input())
    arr = list(map(int, input().split()))

    while count > 0:
        max_idx = get_maxV_idx(arr)
        arr[max_idx] -= 1

        min_idx = get_minV_idx(arr)
        arr[min_idx] += 1

        count -= 1

    print(f'#{t} {arr[get_maxV_idx(arr)]-arr[get_minV_idx(arr)]}')