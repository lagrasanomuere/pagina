const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");

puppeteer.use(StealthPlugin());

async function getKickData() {
    const browser = await puppeteer.launch({
        headless: true,
        args: [
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--disable-dev-shm-usage"
        ]
    });

    try {
        const page = await browser.newPage();

        await page.goto("https://kick.com/JugandorCriticon", {
            waitUntil: "networkidle2",
            timeout: 60000
        });

        await new Promise(r => setTimeout(r, 5000));

        const texto = await page.evaluate(() => document.body.innerText);

        const live = !texto.includes("Last live");

        return {
            live,
            viewers: 0
        };

    } finally {
        await browser.close();
    }
}

module.exports = getKickData;