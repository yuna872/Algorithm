T = int(input())

for t in range(T):
    H,W,N = map(int,input().split())

    floor = (N%H)
    room_number = (N//H)+1
    if(floor == 0):
        floor = H
        room_number = N//H

    print(floor*100 + room_number)