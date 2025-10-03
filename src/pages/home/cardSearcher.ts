// https://scryfall.com/docs/api
export async function cardSearcher(q: string) {
    const url = `https://api.scryfall.com/cards/search?q=${q}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        };

        const result = await response.json();
        console.log(result.data.length);
        return result.data;
    } catch (error) {
        console.error((error as Error).message);
        return null;
    };
};
