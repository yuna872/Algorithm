import sys
sys.stdin = open('1228_input.txt', 'r')

# 원본 암호문의 길이
N = int(input())

# 원본 암호문
code = list(map(int, input().split()))

# 명령어의 개수
M = int(input())

arr = [[] for _ in range(7)]

inputV = input().split()

print(arr)
