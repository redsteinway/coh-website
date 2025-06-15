import puppeteer from 'puppeteer';
import path from 'node:path';
const browser = await puppeteer.launch({headless:'new'});
const page = await browser.newPage();
await page.goto('file://'+path.resolve('index.html'));
await page.waitForSelector('#backToTop',{visible:true});
const get=async()=>{
  return await page.evaluate(()=>{
    const r=document.getElementById('backToTop').getBoundingClientRect();
    return {x:r.left,y:r.top};
  });
}
console.log('initial', await get());
await page.evaluate(()=>window.scrollTo(0,document.body.scrollHeight));
await page.waitForTimeout(1500);
console.log('after', await get());
await browser.close(); 