import { myPush } from './arrays.js';
import { myPop } from './arrays.js';

describe('Given the function myPush', () => {
    test("When 'Last element' string at the end the given array1, and return the array1's length.", () => {
        const array1 = ['First element', 'Second element', 'Third element'];
        expect(myPush(array1, 'Last element')).toEqual(4);
    });
    test('When array have 2 elements should be 3 elements', () => {
        const array = ['pepe', 2];
        const element = 'pepa';
        const expectedResult = 3;
        const results = myPush(array, element);
        expect(results).toBe(expectedResult);
    });

    test('When no array is given it should return error ', () => {
        const arr2=undefined;
        try {
            myPush(arr2)
        } catch (e) {expect(e.message).toBe("Error")
            
        }
        //expect(() => push(noIsArray)).toThrow(Error);
    });
    
});

describe('Given the function myPop', () => {
    test('Delete the last element of the given array2, and return that last element.', () => {
        const array2 = [2, 4, 6, 8];
        expect(myPop(array2)).toBe(8);
    });
    test('Delete the last element of the given array2, and return that last element.', () => {
        const array2 = 3;
        try {
            myPop(array2);
        } catch (e) {expect(e.message).toBe('Error')}
    });
    test('Delete the last element of the given array2, and return that last element.', () => {
        const array2 = ["pepa","pepe"];
        expect(myPop(array2)).toBe("pepe");
    });
    
});

