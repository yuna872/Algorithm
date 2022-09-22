import sys
sys.stdin = open('1780_input.txt', 'r')

def cut(p, N):
    S = set()
    for i in range(N):
        for j in range(N):
            S.add(p[i][j])
            if len(S) != 1:
                for k in range(0, N, 3):
                    for l in range(0, N, 3):




N = int(input())

paper = [list(map(int, input().split())) for _ in range(N)]
cnt = [0] * 3

print(paper)