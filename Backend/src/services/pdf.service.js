import puppeteer from "puppeteer";

let browser;

async function getBrowser() {
    if (!browser) {
        browser = await puppeteer.launch({
        headless: "new",
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
        });
    }

    return browser;
}

/**
 * Generate PDF from HTML
 * @param {string} html
 * @returns {Promise<Buffer>}
 */
export async function generatePDF(html) {
    const browser = await getBrowser();

    const page = await browser.newPage();

    await page.setContent(html, {
        waitUntil: "networkidle0",
    });

    await page.emulateMediaType("screen");

    const pdf = await page.pdf({
        format: "A4",
        printBackground: true,
        margin: {
            top: "20px",
            right: "20px",
            bottom: "20px",
            left: "20px",
        },
    });

    await page.close();

    return pdf;
}

process.on("SIGINT", async () => {
    if (browser) {
        await browser.close();
    }

    process.exit();
});