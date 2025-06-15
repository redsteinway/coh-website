import puppeteer from 'puppeteer';
import path from 'node:path';
const browser=await puppeteer.launch({headless:'new'});
const page=await browser.newPage();
await page.goto('file://'+path.resolve('index.html'));
const res=await page.evaluate(()=>{
  const html=document.documentElement;
  const cs=getComputedStyle(html);
  return {transform:cs.transform,perspective:cs.perspective,filter:cs.filter,contain:cs.contain};
});
console.log(res);
await browser.close(); 