N, K = map(int, input().split())
coin = []
for _ in range(N):
    coin.append(int(input()))

dp = [0 for i in range(K+1)]
dp[0] = 1

# 코인을 차례대로 돌면서
for c in coin:
    for i in range(1, K+1):
        # 만들어야 하는 금액이 현재 동전의 가치보다 크거나 같으면
        if i - c >= 0:
            # 점화식
            dp[i] += dp[i-c]

print(dp[K])