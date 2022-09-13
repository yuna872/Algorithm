# import sys
# sys.stdin = open('5177_input.txt', 'r')

T = int(input())

def enq(n):
    global last
    last += 1
    heap[last] = n

    c = last
    p = c//2

    while p and heap[p] > heap[c]:
        heap[p], heap[c] = heap[c], heap[p]

        c = p
        p = c//2

def findRoot(N):
    sumV = 0
    while N//2 > 0:
        N = N//2
        sumV += heap[N]

    return sumV


for test_case in range(1, T+1):
    N = int(input())

    lst = list(map(int, input().split()))
    heap = [0] * 501
    last = 0

    for l in lst:
        enq(l)

    print(f'#{test_case} {findRoot(N)}')