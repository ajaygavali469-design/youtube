import { test, expect } from '@playwright/test';


// TC_02 - Verify Full Screen Using Keyboard
test('TC_02 - Verify Full Screen Using Keyboard', async ({ page }) => {

    await page.goto('https://www.youtube.com/', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(3000);

    // Search Video
    await page.locator('//input[@placeholder="Search"]').fill('lofi music');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(5000);

    // Open First Video
    await page.locator('(//a[@id="video-title"])[1]').click();
    await page.waitForTimeout(5000);
    await page.keyboard.press('f');
    await page.waitForTimeout(2000);

    await expect(page.locator('//video')).toBeVisible();

    await page.keyboard.press('f');
    await page.waitForTimeout(1000);
});

