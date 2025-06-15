import puppeteer from 'puppeteer';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
// ローカルファイルを開く
const filePath = path.resolve(__dirname, '..', 'index.html');
await page.goto('file://' + filePath);

// ボタンが存在し可視である
await page.waitForSelector('#backToTop', { visible: true, timeout: 3000 });

// 初期位置を取得
const initial = await page.evaluate(() => {
  const rect = document.getElementById('backToTop').getBoundingClientRect();
  return { x: Math.round(rect.x), y: Math.round(rect.y) };
});

// 画面を下までスクロール
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await page.waitForTimeout(500);

// スクロール後の位置
const after = await page.evaluate(() => {
  const rect = document.getElementById('backToTop').getBoundingClientRect();
  return { x: Math.round(rect.x), y: Math.round(rect.y) };
});

// 位置が変わらない = fixed であることを確認
if (initial.x !== after.x || initial.y !== after.y) {
  throw new Error('BackToTop button is not fixed on the viewport');
}

// クリックしてトップに戻る
await page.click('#backToTop');
await page.waitForTimeout(500);
const scrollY = await page.evaluate(() => window.scrollY);
if (scrollY !== 0) {
  throw new Error('BackToTop button did not scroll to top');
}

console.log('✅ BackToTop button test passed');
await browser.close(); 