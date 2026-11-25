import { test, expect } from '@playwright/test';

// TC_04 - Verify Comments Option
test('TC_04 - Verify Comments Option in Shorts', async ({ page }) => {

    await page.goto('https://www.youtube.com/', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(3000);
    await page.locator('(//a[@class="yt-simple-endpoint style-scope ytd-mini-guide-entry-renderer"])[2]').click();
    await page.waitForTimeout(1000);
    await page.locator('xpath=/html/body/ytd-app/div[1]/ytd-page-manager/ytd-shorts/div[3]/div[2]/div[2]/div[2]/ytd-reel-video-renderer/div[2]/ytd-reel-player-overlay-renderer-cow/yt-reel-player-overlay-view-model/div[2]/reel-action-bar-view-model/button-view-model[1]/label/button').click();
    await page.waitForTimeout(2000);
});
