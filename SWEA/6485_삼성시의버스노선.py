T = int(input())

for test_case in range(1, T+1):
    # 1~5000의 버스정류장
    bus_stop = [0] * 5001
    N = int(input())

    # 노선에 대한 정보
    for n in range(N):
        A, B = map(int, input().split())

        # 버스 정류장을 지나는 버스 카운트하기
        for i in range(A, B+1):
            bus_stop[i] += 1

    # print(bus_stop)

    P = int(input())

    # 알고싶은 정류장 번호 리스트
    C = []
    for p in range(P):
        C.append(int(input()))

    print(f'#{test_case}', end=' ')
    for c in C:
        print(bus_stop[c], end=' ')
    print()

