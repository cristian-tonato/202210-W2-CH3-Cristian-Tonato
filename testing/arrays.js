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
