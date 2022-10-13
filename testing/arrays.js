export const myPush = (array, element) => {
    if (!Array.isArray(array)) {
        throw new Error("Error")
    }
    array[array.length] = element;
    return array.length;
};

//const matriz = [2, 3, 5, 6];
export const myPop = (array) => {
    if (!Array.isArray(array)) {
        throw new Error("Error")
    }
    const poppElement = array[array.length - 1];
    array.length = array.length - 1;
    return poppElement;
};
export function mylength(array) {
    if (!Array.isArray(array)) {
        throw new Error('Error is not a parameter ');
    }
    return array.length;
};
/*export function myshift(array, elem) {
    if (!Array.isArray(array)) {
        throw new Error('Error is not a parameter');
    }
    const newArray = [elem];
    for (let i = 1; i <= array.length; i++) {
        newArray[i] = array[i - 1];
    }
    array = newArray;
    return array.length;
};*/