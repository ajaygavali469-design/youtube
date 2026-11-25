import { test, expect } from '@playwright/test';

// TC_03 - Verify Restricted Mode Option
test('TC_03 - Verify Restricted Mode Option', async ({ page }) => {

    await page.goto('https://www.youtube.com/', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(3000);

    await page.locator('(//button[@aria-label="Settings"])[1]').click();
    await page.waitForTimeout(2000);
    await page.locator("//yt-formatted-string[starts-with(normalize-space(),'Restricted Mode')]").click();
    await page.waitForTimeout(2000);
    await page.locator('//div[@class="toggle-container style-scope tp-yt-paper-toggle-button"]').click();
    await page.waitForTimeout(2000);

    await page.locator('(//button[@aria-label="Settings"])[1]').click();
    await page.waitForTimeout(2000);
    await page.locator("//yt-formatted-string[starts-with(normalize-space(),'Restricted Mode')]").click();
    await page.waitForTimeout(2000);
});
