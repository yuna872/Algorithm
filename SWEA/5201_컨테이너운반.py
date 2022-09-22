import sys
sys.stdin = open('5201_input.txt', 'r')

T = int(input())

for test_case in range(1, T+1):

    # N : 컨테이너 수, M : 트럭 수
    N, M = map(int, input().split())

    # N개의 화물 무게
    C = list(map(int, input().split()))
    C.sort(reverse=True)

    # M개의 트럭 적재용량
    T = list(map(int, input().split()))
    T.sort(reverse=True)


    visited = [0] * N

    W = 0
    for i in range(M):
        for j in range(N):
            # 방문한적이 있으면 continue
            if visited[j]:
                continue
            # 적재할 수 있는지 확인
            if T[i] >= C[j]:
                W += C[j]
                visited[j] = 1
                break
    print(f'#{test_case} {W}')

    # ans = 0
    # i, j = 0, 0
    # while i < N and j < M:
    #     # 트럭에 실을 수 있으면 카운트하고 다음 화물, 다음 트럭 확인
    #     if W[i] <= T[j]:
    #         ans += W[i]
    #         i += 1
    #         j += 1
    #     # 그렇지 않으면 그냥 다음 트럭 확인
    #     else:
    #         j += 1
    #
    # print(ans)




