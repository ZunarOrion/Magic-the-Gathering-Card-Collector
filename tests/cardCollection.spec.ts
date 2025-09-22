import { test, expect } from "@playwright/test"

test.describe('Collections', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000/');
    });

    test('Getting into collection', async ({ page }) => {
        const collectionButton = page.locator('#myCollectionBtn').first();
        await collectionButton.click();
        await expect(page.locator('h1')).toHaveText('Collections');
    });

    test('Create a collection', async ({ page }) => {
        const collectionButton = page.locator('#myCollectionBtn').first();
        const collectionName = `Test Collection ${Date.now()}`;
        await collectionButton.click();
        await page.fill('#collectionInput', collectionName);
        await page.click('button[type="submit"]');
        await expect(page.locator('#collectionBox').getByText(collectionName)).toBeVisible();
    });
});
