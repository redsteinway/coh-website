import puppeteer from 'puppeteer';
import path from 'node:path';
const browser=await puppeteer.launch({headless:'new'});
const page=await browser.newPage();
await page.goto('file://'+path.resolve('index.html'));
await page.waitForSelector('#backToTop');
const res=await page.evaluate(()=>{
  const el=document.getElementById('backToTop');
  return {offsetParent:!!el.offsetParent};
});
console.log(res);
await browser.close(); 