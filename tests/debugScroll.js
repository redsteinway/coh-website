import puppeteer from 'puppeteer';
import path from 'node:path';
const browser=await puppeteer.launch({headless:'new'});
const page=await browser.newPage();
await page.goto('file://'+path.resolve('index.html'));
const scrollStart=await page.evaluate(()=>window.scrollY);
console.log('scrollStart',scrollStart);
await browser.close(); 