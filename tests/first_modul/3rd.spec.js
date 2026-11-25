import { test, expect } from '@playwright/test';

// TC_03 - Verify Mute and Unmute Option
test('TC_03 - Verify Mute and Unmute Option in Shorts', async ({ page }) => {

    await page.goto('https://www.youtube.com/', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(3000);

    await page.locator('(//a[@class="yt-simple-endpoint style-scope ytd-mini-guide-entry-renderer"])[2]').click();
    await page.waitForTimeout(1000);

    await page.locator('//button[@title="Pause (k)"]').click();
    await expect(page.locator('(//video)[2] ')).toHaveJSProperty('muted', false);
});
