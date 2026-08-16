import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imgDir = path.join(__dirname, 'assets', 'images');
const files = fs.readdirSync(imgDir);

console.log(`Checking ${files.length} images...`);

// Let's check sizes
const sorted = files.map(f => {
  const stat = fs.statSync(path.join(imgDir, f));
  return { name: f, size: stat.size };
}).sort((a, b) => b.size - a.size);

console.log('Top 20 largest images (highest resolution):');
sorted.slice(0, 20).forEach(item => {
  console.log(`${item.name}: ${(item.size / 1024).toFixed(1)} KB`);
});
