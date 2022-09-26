import sys
sys.stdin = open('5204_input.txt', 'r')

T = int(input())

# 병합하는 작업
def merge(llst, rlst):
    global cnt

    result = []

    lp, rp = 0, 0
    while lp < len(llst) and rp < len(rlst):
        if llst[lp] > rlst[rp]:
            result.append(rlst[rp])
            rp += 1
        else:
            result.append(llst[lp])
            lp += 1

    tmp = len(result)
    result.extend(llst[lp:])

    # 왼쪽 리스트 원소가 더 클때는 cnt += 1
    if tmp != len(result):
        cnt += 1

    result.extend(rlst[rp:])

    return result

# 반으로 쪼개는 작업
def merge_s(lst):

    if len(lst) == 1:
        return lst

    mid = len(lst) // 2
    left = merge_s(lst[:mid])
    right = merge_s(lst[mid:])

    return merge(left, right)


for test_case in range(1, T+1):
    N = int(input())

    arr = list(map(int, input().split()))
    cnt = 0

    res = merge_s(arr)

    print(f'#{test_case} {res[N//2]} {cnt}')