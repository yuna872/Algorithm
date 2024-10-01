N = int(input())

# 스위치
tmp = list(map(int, input().split()))
switch = [0] + list(map(bool, tmp))

# 학생의 수
P = int(input())

for p in range(P):
    # 성별과 인덱스 입력 받기
    s, idx = map(int, input().split())

    # 남학생일때
    if s == 1:
        for i in range(idx, N+1, idx):
            switch[i] = not switch[i]
    # 여학생일때
    else:
        # 지정한 번호 먼저 스위치 바꿔주기
        switch[idx] = not switch[idx]
        i = 1
        while True:
            l = idx - 1 * i
            r = idx + 1 * i
            # 오른쪽 왼쪽 비교해서 대칭이면 바꿔주기
            if 0 < l and r < N + 1 and switch[l] == switch[r]:
                switch[l] = not switch[l]
                switch[r] = not switch[r]
                i += 1
            else:
                break

for i in range(1, N+1):
    if i % 20 == 0:
        print(int(switch[i]))
    else:
        print(int(switch[i]), end=' ')

