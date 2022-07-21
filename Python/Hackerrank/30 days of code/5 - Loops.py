def tabuada(number):
    for num in range(1, 11):
        print(f"{number} x {num} = {number * num}")


if __name__ == '__main__':
    n = int(input().strip())
    tabuada(n)
