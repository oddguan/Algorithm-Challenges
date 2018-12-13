def test(arr):
    bucket_sort = [True] + [False] * len(arr)  # skip 0 index
    print(len(bucket_sort))
    for element in filter(lambda x: 0 < x < len(arr), arr):
        bucket_sort[element] = True
    print(len(bucket_sort))
    return bucket_sort.index(False)

if __name__ == "__main__":
    arr = [15000,16000]
    print('final result: ', test(arr))