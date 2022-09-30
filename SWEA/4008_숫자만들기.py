import sys
sys.stdin = open('4008_input.txt', 'r')

# def perm(i, k, res):
#     global minV, maxV
#
#     if i == k:
#         # print(res)
#         if maxV < res:
#             maxV = res
#         if minV > res:
#             minV = res
#         return
#
#     else:
#         for j in range(i, N-1):
#             opLst[i], opLst[j] = opLst[j], opLst[i]
#
#             if opLst[i] == '+':
#                 perm(i + 1, k, res + nums[i+1])
#             elif opLst[i] == '-':
#                 perm(i + 1, k, res - nums[i+1])
#             elif opLst[i] == '*':
#                 perm(i + 1, k, res * nums[i+1])
#             elif opLst[i] == '/':
#                 perm(i + 1, k, int(res / nums[i+1]))
#
#             opLst[i], opLst[j] = opLst[j], opLst[i]

def solve(opLst, res, depth):
    global minV, maxV


    if depth == N-1:
        if maxV < res:
            maxV = res
        if minV > res:
            minV = res
        # print(res)
        return

    else:
        depth += 1
        for i in range(4):
            if opLst[i]:
                opLst[i] -= 1
                # print(opLst)?
                if i == 0:
                    solve(opLst, res + nums[depth], depth)
                if i == 1:
                    solve(opLst, res - nums[depth], depth)
                if i == 2:
                    solve(opLst, res * nums[depth], depth)
                if i == 3:
                    solve(opLst, int(res / nums[depth]), depth)

                opLst[i] += 1

T = int(input())
# T = 1

for test_case in range(1, T+1):
    N = int(input())
    OP = ['+', '-', '*', '/']
    opLst = list(map(int, input().split()))
    nums = list(map(int, input().split()))

    # print(opLst)

    maxV, minV = -1e9, 1e9
    solve(opLst, nums[0], 0)
    # print(maxV, minV)
    print(f'#{test_case} {maxV-minV}')







