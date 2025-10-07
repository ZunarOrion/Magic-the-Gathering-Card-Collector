import { test, expect } from "@playwright/test"

test.describe('Collections', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000/');
        //Connect a db link
    });

    test('Getting into collection', async ({ page }) => {
        const collectionButton = page.locator('#my-collection-btn').first();
        await collectionButton.click();
        await expect(page.locator('h1')).toHaveText('Collections');
    });

    test('Create a collection', async ({ page }) => {
        const collectionButton = page.locator('#my-collection-btn').first();
        const collectionName = `Test Collection ${Date.now()}`;
        await collectionButton.click();
        await page.fill('#collection-input', collectionName);
        await page.click('button[type="submit"]');
        await expect(page.locator('#collection-box').getByText(collectionName)).toBeVisible();
    });
});
