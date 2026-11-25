
import { test, expect } from '@playwright/test';

// TC_01 - Verify Theater Mode Using Keyboard
test('TC_01 - Verify Theater Mode Using Keyboard', async ({ page }) => {

    await page.goto('https://www.youtube.com/', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(3000);


// Search Video
    await page.locator('//input[@placeholder="Search"]').fill('lofi music');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(5000);

    // Open First Video
    await page.locator('(//a[@id="video-title"])[1]').click();
    await page.waitForTimeout(5000);

    await expect(page.locator('//video')).toBeVisible();
    await page.keyboard.press('t');
    await page.waitForTimeout(2000);

    await expect(page.locator('//div[contains(@class,"ytp-chrome-bottom")]')).toBeVisible();

});

