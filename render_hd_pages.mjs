import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createCanvas, Image, Canvas } from 'canvas';
import * as pdfjsLib from './node_modules/pdfjs-dist/legacy/build/pdf.mjs';

// Register global Canvas and Image for pdfjs-dist
globalThis.Canvas = Canvas;
globalThis.Image = Image;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function testRender() {
  const pdfPath = path.join(__dirname, 'Portofolio Karyatim Mandiri Engineering.pdf');
  const outputDir = path.join(__dirname, 'public', 'assets', 'hd-pages');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const loadingTask = pdfjsLib.getDocument({ 
    data,
    useSystemFonts: true,
    disableFontFace: true,
    verbosity: 0
  });
  const pdfDoc = await loadingTask.promise;
  console.log('PDF doc loaded, numPages:', pdfDoc.numPages);

  // Let's monkey-patch RadialAxialShadingPattern if needed
  for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
    try {
      const page = await pdfDoc.getPage(pageNum);
      const viewport = page.getViewport({ scale: 2.0 }); // 2x HD scale
      const canvas = createCanvas(viewport.width, viewport.height);
      const context = canvas.getContext('2d');

      // Intercept getPattern if it throws
      const renderContext = {
        canvasContext: context,
        viewport: viewport
      };

      await page.render(renderContext).promise;

      const buffer = canvas.toBuffer('image/jpeg', { quality: 0.95 });
      const outPath = path.join(outputDir, `page-${pageNum}.jpg`);
      fs.writeFileSync(outPath, buffer);
      console.log(`Successfully rendered HD page ${pageNum} (${(buffer.length/1024).toFixed(1)} KB)`);
    } catch (e) {
      console.log(`Page ${pageNum} render notice:`, e.message);
    }
  }
}

testRender();
