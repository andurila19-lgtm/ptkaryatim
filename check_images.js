const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'assets', 'images');
const files = fs.readdirSync(imgDir).map(f => {
  const stats = fs.statSync(path.join(imgDir, f));
  return { file: f, size: stats.size };
});

console.log(`Total images: ${files.length}`);
files.slice(0, 30).forEach(f => console.log(`${f.file}: ${(f.size/1024).toFixed(1)} KB`));
