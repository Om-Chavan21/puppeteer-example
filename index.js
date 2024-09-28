// index.js
const express = require("express");
const puppeteer = require("puppeteer");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/screenshot", async (req, res) => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"], // Required for Render
    });
    const page = await browser.newPage();
    await page.goto("https://example.com", { waitUntil: "networkidle0" });
    const screenshot = await page.screenshot();
    await browser.close();
    res.type("image/png").send(screenshot);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error taking screenshot");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
