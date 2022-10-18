from collections import deque

direction = { 0:[0, 1], 1:[-1, 0], 2:[0, -1], 3:[1, 0]}

def clean():



N, M = map(int, input().split())

r, c, d = map(int, input().split())

arr = [list(map(int, input().split())) for _ in range(N)]
visited = [[0] * M for _ in range(N)]