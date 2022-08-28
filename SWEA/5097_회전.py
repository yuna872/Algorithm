T = int(input())

for test_case in range(1, T+1):
    N, M = map(int, input().split())
    # 최대 1000번의 회전을 하기 위해서 리스트를 뒤에 추가
    Q = list(map(int, input().split())) + [0] * 1000

    front = -1
    rear = N-1

    for _ in range(M):
        rear += 1
        front += 1
        # 먼저 맨 뒤에 맨 앞 원소를 덮어 써주고
        Q[rear] = Q[front]
        # 빼낸 원소는 0으로 바꿔준다
        Q[front] = 0

    # front +1 한 값을 출력하면 된다
    print(f'#{test_case} {Q[front+1]}')




