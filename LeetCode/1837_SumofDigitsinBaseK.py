class Solution:
    def sumBase(self, n: int, k: int):
        sumV = 0

        while n > 0:
            sumV += n % k
            n = n//k

        return sumV

# sol = Solution()
# print(sol.sumBase(34,6))

