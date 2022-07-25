T = int(input())

for t in range(T):
    
    N = int(input())
    # 돌이 떨어진 거리를 리스트에 저장
    distances = list(input().split())
    # 각 거리의 절댓값을 받을 리스트
    absolute = []

    for n in range(N):
        # '-'으로 시작하는 문자열이면 -를 제거한 문자열을 정수로 변환하여 저장
        if(distances[n].startswith('-')):
            absolute.append(int(distances[n][1:]))
        # 그렇지 않으면 그대로 정수로 변환하여 저장
        else:
            absolute.append(int(distances[n]))
            
    
    print(f'#{t+1} {min(absolute)} {absolute.count(min(absolute))}')        


