CITY = [[0] * 10001 for _ in range(10001)]

while True:
    try:
        u, v, l = map(int, input().split())
        CITY[u][v] = l
        CITY[v][u] = l

    except EOFError:
        break

