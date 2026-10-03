const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: "new", args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));

  await page.goto('http://localhost:5174');
  
  // Wait for the button
  await page.waitForSelector('button[aria-label="Open Ask Mikiale Assistant"]');
  await page.click('button[aria-label="Open Ask Mikiale Assistant"]');
  
  await new Promise(r => setTimeout(r, 1000));
  
  // We can just dump the keys by finding the script that logged them, but since we just need it,
  // Let's modify the AskMikiale.jsx to inject the keys into the DOM!
  
  await browser.close();
})();
