const fs = require('fs');
const path = require('path');

function extractImages() {
  const pdfPath = path.join(__dirname, 'Portofolio Karyatim Mandiri Engineering.pdf');
  const outputDir = path.join(__dirname, 'assets', 'images');

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const buffer = fs.readFileSync(pdfPath);
  let count = 0;

  // Search for JPEG images (SOI: 0xFFD8, EOI: 0xFFD9)
  let i = 0;
  while (i < buffer.length - 1) {
    if (buffer[i] === 0xFF && buffer[i+1] === 0xD8 && buffer[i+2] === 0xFF) {
      // Found Start of Image
      const start = i;
      let j = i + 2;
      let end = -1;
      while (j < buffer.length - 1) {
        if (buffer[j] === 0xFF && buffer[j+1] === 0xD9) {
          end = j + 2;
          break;
        }
        j++;
      }
      if (end !== -1 && (end - start) > 5000) { // filter out tiny artifacts
        count++;
        const imgBuffer = buffer.slice(start, end);
        const fileName = `img-${String(count).padStart(3, '0')}.jpg`;
        fs.writeFileSync(path.join(outputDir, fileName), imgBuffer);
        console.log(`Extracted ${fileName} (${imgBuffer.length} bytes)`);
        i = end;
        continue;
      }
    }
    i++;
  }
  console.log(`Extracted total ${count} images to ${outputDir}`);
}

extractImages();
