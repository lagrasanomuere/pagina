const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");

puppeteer.use(StealthPlugin());

(async () => {

    const browser = await puppeteer.launch({
        headless: true,
        args: [
            "--no-sandbox",
            "--disable-setuid-sandbox"
        ]
    });

    const page = await browser.newPage();

    page.on("response", async (response) => {

        const url = response.url();

        if (url.includes("/channels/")) {

            try {

                const json = await response.json();

                console.log("\n========================");
                console.log(url);
                console.log(JSON.stringify(json, null, 2));

            } catch {}

        }

    });

    await page.goto("https://kick.com/JugandorCriticon", {
        waitUntil: "networkidle2"
    });

    await new Promise(r => setTimeout(r, 10000));

    await browser.close();

})();