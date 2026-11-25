
import { test, expect } from '@playwright/test';

// TC_01 - Verify Appearance Option
test('TC_01 - Verify Appearance Option', async ({ page }) => {

    await page.goto('https://www.youtube.com/', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(3000);

    await page.locator('(//button[@aria-label="Settings"])[1]').click();
    await page.waitForTimeout(2000);
    await page.locator('//*[@id="items"]/ytd-toggle-theme-compact-link-renderer').click();
    await page.waitForTimeout(2000);
    await expect(page.locator("//yt-formatted-string[contains(normalize-space(),'Dark theme')]")).toBeVisible();
    await page.locator("//yt-formatted-string[contains(normalize-space(),'Dark theme')]").click();
    await page.waitForTimeout(2000);

    await page.locator('(//button[@aria-label="Settings"])[1]').click();
    await page.waitForTimeout(2000);
    await page.locator('//*[@id="items"]/ytd-toggle-theme-compact-link-renderer').click();
    await page.waitForTimeout(2000);
});

