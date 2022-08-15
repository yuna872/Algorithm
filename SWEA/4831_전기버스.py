T = int(input())

for test_case in range(1, T+1):
    K, N, M = map(int, input().split())

    charge_station = list(map(int, input().split()))

    # 버스 정류장
    bus_stop = [1] + [0]*(N-1)
    cnt = 0

    # 충전기가 있으면 1 저장
    for c in charge_station:
        bus_stop[c] = 1

    idx = 0
    while idx+K < N:
        for k in range(K, -1, -1):
            # 충전소 찾았으면
            if bus_stop[idx+k] == 1:
                cnt += 1
                break
            # 못 찾았으면 k-1, 게다가 k가 0 이면 cnt는 0
            else:
                if k == 1:
                    cnt = 0
                    break
                else:
                    pass

        if cnt == 0:
            break

        idx += k

    print(f'#{test_case} {cnt}')











