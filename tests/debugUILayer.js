import puppeteer from 'puppeteer';
import path from 'node:path';
const browser=await puppeteer.launch({headless:'new'});
const page=await browser.newPage();
await page.goto('file://'+path.resolve('index.html'));
const res=await page.evaluate(()=>{
  const el=document.getElementById('ui-layer');
  const cs=el?getComputedStyle(el):null;
  return cs?{position:cs.position,transform:cs.transform,perspective:cs.perspective}:null;
});
console.log(res);
await browser.close(); 