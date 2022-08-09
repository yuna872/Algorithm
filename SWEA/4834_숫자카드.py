T = int(input())

for test_case in range(1, T+1):
    N = int(input())

    num_arr = [ int(num) for num in input()]

    cnt_arr = [0]*10

    #count 배열에 각 갯수 저장
    for i in range(N):
        cnt_arr[num_arr[i]] += 1

    maxV = 0
    maxV_idx = 0

    #maxV 와 그 인덱스 갱신하기
    for idx in range(len(cnt_arr)):
        if cnt_arr[idx] >= maxV :
            maxV = cnt_arr[idx]
            maxV_idx = idx
    
    print(f'#{test_case} {maxV_idx} {maxV}')
    
    
        
