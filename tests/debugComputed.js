import puppeteer from 'puppeteer';
import path from 'node:path';
const browser=await puppeteer.launch({headless:'new'});
const page=await browser.newPage();
await page.goto('file://'+path.resolve('index.html'));
await page.waitForSelector('#backToTop');
const res=await page.evaluate(()=>{
  const el=document.getElementById('backToTop');
  const cs=getComputedStyle(el);
  return {top:cs.top,bottom:cs.bottom};
});
console.log(res);
await browser.close(); 