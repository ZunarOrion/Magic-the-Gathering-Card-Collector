export function validateCollectionName(input: string): string | null {
    const trimmedName = input.trim();

    if (trimmedName.length === 0) return null;
    if (trimmedName.length > 30) return null;
    if (!/^[a-zA-Z0-9\s]+$/.test(trimmedName)) return null;
    const forbiddenNames = ["admin", "login", "settings"];
    if (forbiddenNames.includes(trimmedName.toLowerCase())) return null;

    return trimmedName;
};
