export function myPop(arr, value) {
    arr[arr.length - 1] = value;
    return arr;
}

export const myPush = (arr, value) => {
    const length = myLength(arr);
    arr[length] = value;

    return arr;
};
