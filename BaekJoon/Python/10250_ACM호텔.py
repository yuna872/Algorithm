T = int(input())

for t in range(T):
    H,W,N = map(int,input().split())

    # N을 H로 나눈 값이 층 수
    floor = (N%H)

    room_number = (N//H)+1

    # 나머지가 0이면 꼭대기 층
    if(floor == 0):
        floor = H
        room_number = N//H

    # (몇 층 몇 호) 형식으로 출력하기
    print(floor*100 + room_number)