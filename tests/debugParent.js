import puppeteer from 'puppeteer';
import path from 'node:path';
const browser=await puppeteer.launch({headless:'new'});
const page = await browser.newPage();
await page.goto('file://'+path.resolve('index.html'));
await page.waitForSelector('#backToTop');
const res=await page.evaluate(()=>{
  const el=document.getElementById('backToTop');
  let node=el.parentElement, names=[];
  while(node&&node!==document.body){
    names.push({tag:node.tagName, id:node.id, class:node.className});
    node=node.parentElement;
  }
  return {position:getComputedStyle(el).position, parents:names};
});
console.log(res);
await browser.close(); 