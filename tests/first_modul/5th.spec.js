import { test, expect } from '@playwright/test';

// TC_05 - Verify Share Option
test('TC_05 - Verify Share Option in Shorts', async ({ page }) => {

    await page.goto('https://www.youtube.com/', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(3000);
    await page.locator('(//a[@class="yt-simple-endpoint style-scope ytd-mini-guide-entry-renderer"])[2]').click();
    await page.waitForTimeout(1000);
    await page.locator('(//button[@aria-label="Share"])[3]').click();
    await page.waitForTimeout(2000);
});
