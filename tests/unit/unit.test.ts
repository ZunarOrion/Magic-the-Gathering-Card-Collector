import { describe, expect, test } from 'vitest';
import { renderCollectionPage } from '../../src/pages/collection-page';

describe(renderCollectionPage, () => {
    document.body.innerHTML = '<div id="page-content"></div>';
});

test('Does h1 exist and does it have text "Collections"', async () =>{
    await renderCollectionPage();

    const h1 = document.querySelector('#collection-Header');

    expect(h1).toBeTruthy();
    expect(h1).toBe('h1');
    expect(h1).toBe('Collections');
});