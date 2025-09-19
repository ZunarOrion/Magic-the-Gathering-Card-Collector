import { test, expect } from "@playwright/test"

test.describe('Collections', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000/');
    });

    test('Getting into collection', async ({ page }) => {
        const collectionButton = page.locator('#myCollectionBtn').first();
        await collectionButton.click();
    });

    // test('Add a new collection', async ({ page }) => {
    //     const name = 'Playwright test collection';

    //     await page.fill('#collectionInput', name);
    //     await page.click('#create');

    //     await expect(page.locator('#collectionBox')).toContainText(name);
    // });
});