import sys
sys.stdin = open('1493_input.txt', 'r')

T = int(input())

for test_case in range(1, T+1):
    p, q = map(int, input().split())