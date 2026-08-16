import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imgDir = path.join(__dirname, 'assets', 'images');
const destDir = path.join(__dirname, 'public', 'assets', 'portfolio', 'hd_slides');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const slideMapping = {
  'hero-bg': 'img-002.jpg',
  'clients-bg': 'img-004.jpg',
  'asphalt-hd': 'img-039.jpg',
  'waterproofing-hd': 'img-049.jpg',
  'canopy-hd': 'img-057.jpg',
  'interior-hd-1': 'img-062.jpg',
  'interior-hd-2': 'img-067.jpg',
  'branding-hd-1': 'img-072.jpg',
  'branding-hd-2': 'img-082.jpg',
  'partition-hd': 'img-087.jpg',
  'epoxy-hd': 'img-092.jpg',
  'pengecatan-hd': 'img-101.jpg',
  'cctv-hd': 'img-111.jpg'
};

for (const [name, srcFile] of Object.entries(slideMapping)) {
  const src = path.join(imgDir, srcFile);
  if (fs.existsSync(src)) {
    const dest = path.join(destDir, `${name}.jpg`);
    fs.copyFileSync(src, dest);
    const sz = (fs.statSync(dest).size / 1024).toFixed(1);
    console.log(`Copied HD slide ${srcFile} -> ${name}.jpg (${sz} KB)`);
  }
}

// Also let's update team_indofood in public
const teamHighRes = path.join(imgDir, 'img-013.jpg');
if (fs.existsSync(teamHighRes)) {
  fs.copyFileSync(teamHighRes, path.join(__dirname, 'public', 'assets', 'portfolio', 'team_indofood', 'team_indofood-hd.jpg'));
  console.log('Copied HD Indofood team photo!');
}
