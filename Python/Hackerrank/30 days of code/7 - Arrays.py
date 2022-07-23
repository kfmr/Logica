# reverse array


def reverseArray(arr):
    newArr = ""
    for item in range(len(arr)-1, -1, -1):
        newArr += f"{arr[item]}" + " "
    return newArr



if __name__ == '__main__':
    n = int(input().strip())

    arr = list(map(int, input().rstrip().split()))
    print(reverseArray(arr))
