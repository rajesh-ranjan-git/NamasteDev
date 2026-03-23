import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100,
    args: ["--window-size=1080,1024"],
  });
  const page = await browser.newPage();

  await page.goto("https://namastedev.com/");

  console.log("NamasteDev home page loaded");

  await page.setViewport({ width: 1080, height: 1024 });

  // const coursesPageLink = "a[href='/learn']";
  const coursesPageLink = "ul > li:nth-child(2) > a";

  await page.waitForSelector(coursesPageLink);

  await page.click(coursesPageLink);

  await browser.close();
})();
