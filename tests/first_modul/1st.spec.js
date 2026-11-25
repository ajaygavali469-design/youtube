
import { test, expect } from '@playwright/test';

// TC_01 - Verify Like Option
test('TC_01 - Verify Like Option in Shorts', async ({ page }) => {

    await page.goto('https://www.youtube.com/', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(3000);

    await page.locator('(//a[@class="yt-simple-endpoint style-scope ytd-mini-guide-entry-renderer"])[2]').click();
    await page.waitForTimeout(5000);

    await page.locator('(//button[@class="ytSpecButtonShapeNextHost ytSpecButtonShapeNextTonal ytSpecButtonShapeNextMono ytSpecButtonShapeNextSizeL ytSpecButtonShapeNextIconButton ytSpecButtonShapeNextEnableBackdropFilterExperiment ytSpecButtonShapeNextMainstageIconSize ytSpecButtonShapeNextMainstagePadding"])[1]').click();
    await page.waitForTimeout(2000);

});
