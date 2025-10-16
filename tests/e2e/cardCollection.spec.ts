import { test, expect } from "@playwright/test"

test.describe('Collections', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000/');
        //Connect a db link
    });

    test('Test collection page form', async ({ page }) => {
        //Eneting My collections page
        await page.locator('#my-collections-btn').click();
        await expect(page.locator('h1')).toHaveText('Collections');

        //Creating a collection
        const collectionName = `Test Collection ${Date.now()}`;
        await page.fill('#collection-input', collectionName);
        await page.click('button[type="submit"]');
        await expect(page.locator('#collection-box').getByText(collectionName)).toBeVisible();

        //Edeting a collection
        const boxCount = await page.locator('.collection-item').count();
        expect(boxCount).toBeGreaterThan(0);
        const editText = "Collection edited";
        page.on('dialog', dialog => dialog.accept(editText));
        await page.locator('.collection-item >> nth=0 >> .edit-btn').click();
        await expect(page.locator('.collection-name')).toHaveText(editText);

        //Deleteing a collection
        await page.locator('.collection-item >> nth=0 >> .delete-btn').click();
        await expect(page.locator('.collection-item')).toHaveCount(0);
    });
});
