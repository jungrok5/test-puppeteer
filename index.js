const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        //headless: false,
        //slowMo: 50,
    });
    const page = await browser.newPage();
    page.on('console', (msg) => console.log('PAGE LOG:', msg.text()));
    await page.evaluate(() => console.log(`url is ${location.href}`));

    await page.goto('https://hubs.mozilla.com/WwWmDzh/elaborate-nautical-plaza');

    await page.waitForSelector('#ui-root > div > div > div.RoomLayout__main__2H19N.RoomLayout__viewport__25svn > div.Modal__modal__1Ursl > div > div > div.Column__column__31daz.Column__md-gap__2h1c8.Column__center__Y9mvq.Column__margin-0-last-child__1mbso.RoomEntryModal__buttons__X3XNq > button.Button__button__2C3ps.TextInput__button__1ue_9.Button__accent4__2jrJP');
    await page.click('#ui-root > div > div > div.RoomLayout__main__2H19N.RoomLayout__viewport__25svn > div.Modal__modal__1Ursl > div > div > div.Column__column__31daz.Column__md-gap__2h1c8.Column__center__Y9mvq.Column__margin-0-last-child__1mbso.RoomEntryModal__buttons__X3XNq > button.Button__button__2C3ps.TextInput__button__1ue_9.Button__accent4__2jrJP');
    await page.screenshot({ path: 'screenshot/enter-room.png' });

    await page.waitForSelector('#ui-root > div > div > div.RoomLayout__main__2H19N.RoomLayout__viewport__25svn > div.Modal__modal__1Ursl.Modal__sm-fullscreen__3KER8 > div.Modal__content__2Xoyi > form > button');
    await page.click('#ui-root > div > div > div.RoomLayout__main__2H19N.RoomLayout__viewport__25svn > div.Modal__modal__1Ursl.Modal__sm-fullscreen__3KER8 > div.Modal__content__2Xoyi > form > button');
    await page.screenshot({ path: 'screenshot/select-avatar.png' });

    await page.waitForSelector('#ui-root > div > div > div.RoomLayout__main__2H19N.RoomLayout__viewport__25svn > div.Modal__modal__1Ursl.Modal__sm-fullscreen__3KER8 > div.Modal__content__2Xoyi > div > button');
    await page.click('#ui-root > div > div > div.RoomLayout__main__2H19N.RoomLayout__viewport__25svn > div.Modal__modal__1Ursl.Modal__sm-fullscreen__3KER8 > div.Modal__content__2Xoyi > div > button');
    await page.screenshot({ path: 'screenshot/select-mic.png' });

    //page.mouse.drag()
    //page.waitForTimeout()
    //await browser.close();
})();