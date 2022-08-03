N = int(input())

# 1번 방 빼고 시작해
N = N - 1
layer = 1

while N > 0:
    N -= 6*layer
    layer += 1

print(layer)
