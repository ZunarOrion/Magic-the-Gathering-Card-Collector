// import { expect, test} from 'vitest';
// import { sum } from './sum';

// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3)
// });

// import { expect, test, it } from "vitest";
// import { sum, validate } from "./sum";

// test("test sum formData", () => {
//     expect(validate({"blogTitle": 111, "blogText": 111})).toBe(false)
// });

// import { expect, test } from 'vitest';
// import { collectionCreate } from './collection/collectionCreate.js'

// test("test collectionCreate formData", () => {
//     expect(typeof collectionCreate("collectionName")).toBe(String)
// });


import { expect, test } from "vitest";
import collectionCreate from "./collection/collectionCreate";

test("", () => {
    expect(typeof collectionCreate("collectionName")).toBe(string);
});