N = int(input())

for n in range(N):
    soldiers = list(map(int, input().split()))

    cnt = soldiers[0]
    soldiers = soldiers[1:]

    s_dict = {}

    for s in soldiers:
        s_dict[s] = 0

    for s in soldiers:
        s_dict[s] += 1

    result = False
    for k, v in s_dict.items():
        if v > cnt//2:
            print(k)
            result = True

    if result == False:
        print('SYJKGW')





