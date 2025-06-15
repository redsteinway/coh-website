import puppeteer from 'puppeteer';
import path from 'node:path';
const browser=await puppeteer.launch({headless:'new'});
const page=await browser.newPage();
await page.goto('file://'+path.resolve('index.html'));
const res=await page.evaluate(()=>{
  const cs=getComputedStyle(document.body);
  return {transform:cs.transform,transformStyle:cs.transformStyle,perspective:cs.perspective};
});
console.log(res);
await browser.close(); 