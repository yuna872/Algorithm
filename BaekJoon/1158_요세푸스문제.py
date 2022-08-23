from collections import deque

<<<<<<< HEAD
N, K = map(int, input().split())

arr = [i for i in range(1, N+1)]

delete = []

while delete != arr:
=======
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








>>>>>>> 63f904aadf74531d9400310939ef88460b63f73a


