import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const portfolioDir = path.join(__dirname, 'public', 'assets', 'portfolio');
const categories = fs.readdirSync(portfolioDir);

for (const cat of categories) {
  const catPath = path.join(portfolioDir, cat);
  if (fs.statSync(catPath).isDirectory()) {
    const files = fs.readdirSync(catPath);
    console.log(`[${cat}] contains ${files.length} images:`);
    files.forEach(f => {
      const sz = fs.statSync(path.join(catPath, f)).size;
      console.log(`  - ${f} (${(sz/1024).toFixed(1)} KB)`);
    });
  }
}
