import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createCanvas } from 'canvas';
import * as pdfjsLib from './node_modules/pdfjs-dist/legacy/build/pdf.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function renderPdfPages() {
  const pdfPath = path.join(__dirname, 'Portofolio Karyatim Mandiri Engineering.pdf');
  const outputDir = path.join(__dirname, 'assets', 'pdf-pages');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const loadingTask = pdfjsLib.getDocument({ 
    data,
    useSystemFonts: true,
    disableFontFace: false
  });
  const pdfDoc = await loadingTask.promise;

  console.log(`Total Pages: ${pdfDoc.numPages}`);

  for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
    const page = await pdfDoc.getPage(pageNum);
    const viewport = page.getViewport({ scale: 1.5 });
    
    const canvas = createCanvas(viewport.width, viewport.height);
    const context = canvas.getContext('2d');

    await page.render({
      canvasContext: context,
      viewport: viewport
    }).promise;

    const imageBuffer = canvas.toBuffer('image/jpeg', { quality: 0.9 });
    const outputPath = path.join(outputDir, `page-${pageNum}.jpg`);
    fs.writeFileSync(outputPath, imageBuffer);
    console.log(`Saved page ${pageNum} to ${outputPath}`);
  }
  console.log('Finished rendering all pages!');
}

renderPdfPages().catch(err => {
  console.error('Error rendering PDF:', err);
});
