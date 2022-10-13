export const myLength=(arr)=>{
    const result = 0;
    for (const value of arr) {
        result++
    }
    return result
};

export const myPush = (arr, value) => {
    const length = myLength(arr);
    arr[length] = value;

    return arr;
};

