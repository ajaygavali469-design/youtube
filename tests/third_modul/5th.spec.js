import { test, expect } from '@playwright/test';

// TC_05 - Verify Keyboard Shortcuts Option
test('TC_05 - Verify Keyboard Shortcuts Option', async ({ page }) => {

    await page.goto('https://www.youtube.com/', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(3000);

    await page.locator('(//button[@aria-label="Settings"])[1]').click();
    await page.waitForTimeout(2000);
    await page.locator("//yt-formatted-string[normalize-space()='Keyboard shortcuts']").click();
    await page.waitForTimeout(2000);

});
