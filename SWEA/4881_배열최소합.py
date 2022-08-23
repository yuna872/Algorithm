def backTrack(a, k, input):
    global MAXCANDIDATES
    c = [0] * MAXCANDIDATES

    if k == input:

T = int(input())

for test_case in range(1, T+1):
    N = int(input())

    board = [list(map(int, input().split())) for _ in range(N)]

