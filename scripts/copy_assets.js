import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const sourceBase = path.join(rootDir, 'Images', 'home');
const targetBase = path.join(rootDir, 'public', 'images');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

ensureDir(targetBase);
ensureDir(path.join(targetBase, 'services'));
ensureDir(path.join(targetBase, 'logos'));
ensureDir(path.join(targetBase, 'clients'));
ensureDir(path.join(targetBase, 'testimonials'));
ensureDir(path.join(targetBase, 'about'));

// Copy Hero Image
const heroSrc = path.join(sourceBase, 'Hero image.jpg');
if (fs.existsSync(heroSrc)) {
  fs.copyFileSync(heroSrc, path.join(targetBase, 'hero-bg.jpg'));
  console.log('Copied hero image');
}

// Copy Logos
const logoHeader = path.join(sourceBase, 'logo', 'Rectangle 897.png');
if (fs.existsSync(logoHeader)) {
  fs.copyFileSync(logoHeader, path.join(targetBase, 'logos', 'header-logo.png'));
}
const logoFooter = path.join(sourceBase, 'footer logo', '3dd808f42966d37822c284e990c310e3465f9c31.png');
if (fs.existsSync(logoFooter)) {
  fs.copyFileSync(logoFooter, path.join(targetBase, 'logos', 'footer-logo.png'));
}

// Copy Partner Logos
const homeLogosDir = path.join(sourceBase, 'home-logo');
if (fs.existsSync(homeLogosDir)) {
  const partnerFiles = fs.readdirSync(homeLogosDir);
  partnerFiles.forEach((file, index) => {
    fs.copyFileSync(
      path.join(homeLogosDir, file),
      path.join(targetBase, 'logos', `partner-${index + 1}.png`)
    );
  });
  console.log(`Copied ${partnerFiles.length} partner logos`);
}

// Copy Services Images
const servicesDir = path.join(sourceBase, 'our services');
if (fs.existsSync(servicesDir)) {
  const serviceFiles = fs.readdirSync(servicesDir);
  serviceFiles.forEach((file, index) => {
    fs.copyFileSync(
      path.join(servicesDir, file),
      path.join(targetBase, 'services', `service-${index + 1}${path.extname(file)}`)
    );
  });
  console.log(`Copied ${serviceFiles.length} service images`);
}

// Copy Client Logos
const clientsDir = path.join(sourceBase, 'OUR TRUSTED CLIENTS');
if (fs.existsSync(clientsDir)) {
  const clientFiles = fs.readdirSync(clientsDir);
  clientFiles.forEach((file, index) => {
    fs.copyFileSync(
      path.join(clientsDir, file),
      path.join(targetBase, 'clients', `client-${index + 1}${path.extname(file)}`)
    );
  });
  console.log(`Copied ${clientFiles.length} client logos`);
}

// Copy About Us Images
const aboutDir = path.join(sourceBase, 'Who We Are');
if (fs.existsSync(aboutDir)) {
  const aboutFiles = fs.readdirSync(aboutDir);
  aboutFiles.forEach((file, index) => {
    fs.copyFileSync(
      path.join(aboutDir, file),
      path.join(targetBase, 'about', `about-${index + 1}${path.extname(file)}`)
    );
  });
  console.log(`Copied ${aboutFiles.length} about us images`);
}

// Copy Testimonial Avatars
const satDir = path.join(sourceBase, 'Your Satisfaction and Our Promise');
if (fs.existsSync(satDir)) {
  const satFiles = fs.readdirSync(satDir);
  satFiles.forEach((file, index) => {
    fs.copyFileSync(
      path.join(satDir, file),
      path.join(targetBase, 'testimonials', `sat-${index + 1}${path.extname(file)}`)
    );
  });
  console.log(`Copied ${satFiles.length} satisfaction assets`);
}

const sayDir = path.join(sourceBase, 'What our clients  have to say');
if (fs.existsSync(sayDir)) {
  const sayFiles = fs.readdirSync(sayDir);
  sayFiles.forEach((file, index) => {
    fs.copyFileSync(
      path.join(sayDir, file),
      path.join(targetBase, 'testimonials', `say-${index + 1}${path.extname(file)}`)
    );
  });
  console.log(`Copied ${sayFiles.length} client say assets`);
}

console.log('Asset processing complete!');
