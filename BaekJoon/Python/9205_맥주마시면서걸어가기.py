import sys
sys.stdin = open('9205_input.txt', 'r')

T = int(input())

for test_case in range(1, T+1):
    # 편의점 개수
    N = int(input())

    home_x, home_y = map(int, input().split())

    for n in range(N):
        x1, y1 = map(int, input().split())

