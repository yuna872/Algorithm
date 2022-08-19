from collections import deque

N, jump = map(int, input().split())

dq = deque([i for i in range(1, N+1)])

print('<', end='')
while dq:
    dq.rotate(-2)
    if len(dq) == 1:
        print(dq.popleft(), end='')
    else:
        print(dq.popleft(), end=', ')
print('>', end='')










