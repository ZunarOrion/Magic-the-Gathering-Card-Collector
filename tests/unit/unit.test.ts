//Testa inputs!!!
import { describe, test, expect } from 'vitest';
import { validateCollectionName } from '../../src/components/validators';

describe("validateCollectionName", () => {
    test("Checks if validation trims and accepts valid input", () => {
        const res = validateCollectionName(" My Collection ");
        expect(res).toBe("My Collection");
    });
    
    test("Checks if validation rejects empty input", () => {
        const res = validateCollectionName("   ");
        expect(res).toBeNull();
    });
    
    test("Checks if validation rejects overly long names", () => {
        const overlyLongName = "A".repeat(31);
        const res = validateCollectionName(overlyLongName);
        expect(res).toBeNull();
    });
    
    test("checks if validation rejects special characters or emojis", () => {
        const res = validateCollectionName("!?#¤");
        expect(res).toBeNull();
    });
    
    test("checks if validation rejects forbidden words", () => {
        const res = validateCollectionName("admin");
        expect(res).toBeNull();
    });
});
