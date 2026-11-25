import { test, expect } from '@playwright/test';


// TC_04 - Verify Location Option
test('TC_04 - Verify Location Option', async ({ page }) => {

    await page.goto('https://www.youtube.com/', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(3000);

    await page.locator('(//button[@aria-label="Settings"])[1]').click();
    await page.waitForTimeout(2000);
    await page.locator("//yt-formatted-string[starts-with(normalize-space(),'Location')]").click();
    await page.waitForTimeout(2000);
    await page.getByText('Australia', { exact: true }).click();
    await page.waitForTimeout(2000);

    await page.locator('(//button[@aria-label="Settings"])[1]').click();
    await page.waitForTimeout(2000);
    await page.locator("//yt-formatted-string[starts-with(normalize-space(),'Location')]").click();
    await page.waitForTimeout(2000);
});

