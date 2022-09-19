import sys
sys.stdin = open('5014_input.txt', 'r')

F, S, G, U, D = map(int, input().split())
apt = [0] * (F+1)

def bfs(s):
    Q = [s]
    while Q:
        i = Q.pop(0)
        if i == G:
            return apt[i]
        for ni in [i-D, i+U]:
            if 0 < ni <= F and not apt[ni] and ni != s:
                apt[ni] = apt[i] + 1
                Q.append(ni)
    return 'use the stairs'

print(bfs(S))
