def find(lst):
    now = 0
    i = 0

    # 끝에 닿을 수 있다면 길이 있는것!
    while i < N:

        while lst[now] == lst[i]:
            i += 1


    return



# NxN 행렬, 경사로의 길이 L
N, L = map(int, input().split())

arr = [list(map(int, input().split())) for _ in range(N)]

load_R = []
load_C = []
for i in range(N):
    # 각 행에 대해서 작업 수행
    arr[i]