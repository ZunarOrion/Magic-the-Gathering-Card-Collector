async function cardSearcher(q) {
    const url = `https://api.scryfall.com/cards/search?q=${q}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        result.data.length
        return console.log(result.data.length);
    } catch (error) {
        return console.error(error.message);
    }
}

cardSearcher("island");