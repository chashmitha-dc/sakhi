const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const imagesDir = path.join(publicDir, 'images');
const videosDir = path.join(publicDir, 'videos');

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });
if (!fs.existsSync(videosDir)) fs.mkdirSync(videosDir, { recursive: true });

// Palette & patterns for realistic luxury sarees
const styles = [
  { name: 'kanchipuram-gold-red', title: 'Royal Kanchipuram Pure Silk', bg: '#800020', border: '#C89B3C', accent: '#D4AF37', pattern: 'zari-peacock' },
  { name: 'banarasi-royal-blue', title: 'Banarasi Brocade Silk Saree', bg: '#002B49', border: '#C89B3C', accent: '#E5C174', pattern: 'zari-floral' },
  { name: 'emerald-bridal-silk', title: 'Emerald Bridal Heritage Saree', bg: '#094D2E', border: '#C89B3C', accent: '#F0E68C', pattern: 'temple-border' },
  { name: 'magenta-party-wear', title: 'Crimson Magenta Designer Silk', bg: '#8A1538', border: '#C89B3C', accent: '#FFD700', pattern: 'paisley-gold' },
  { name: 'tussar-mustard-gold', title: 'Tussar Geometrical Gold Saree', bg: '#B8860B', border: '#5C3A21', accent: '#FFF8DC', pattern: 'geometric-zari' },
  { name: 'pastel-pink-organza', title: 'Pastel Organza Hand-Embroidered', bg: '#E8C5C8', border: '#C89B3C', accent: '#FFFFFF', pattern: 'floral-motive' },
  { name: 'ivory-cotton-silk', title: 'Ivory Chanderi Cotton Silk', bg: '#F8F5F0', border: '#5C3A21', accent: '#C89B3C', pattern: 'minimal-stripe' },
  { name: 'purple-kanchipuram', title: 'Deep Violet Kanchipuram Silk', bg: '#4B0082', border: '#C89B3C', accent: '#FFD700', pattern: 'zari-mandala' },
  { name: 'maroon-velvet-bridal', title: 'Maroon Zardosi Heavy Velvet', bg: '#4A0E17', border: '#D4AF37', accent: '#E5C174', pattern: 'zardosi-heavy' },
  { name: 'mint-green-linen', title: 'Mint Linen Saree with Zari Pallu', bg: '#8FBC8F', border: '#5C3A21', accent: '#F5FEED', pattern: 'linen-texture' },
  { name: 'mustard-yellow-banarasi', title: 'Sunlit Yellow Banarasi Silk', bg: '#CC8800', border: '#800020', accent: '#FFD700', pattern: 'banarasi-jaal' },
  { name: 'coral-chiffon-party', title: 'Royal Coral Sequined Chiffon', bg: '#D9534F', border: '#C89B3C', accent: '#FFF0F5', pattern: 'sequence-sparkle' },
];

function generateSareeSVG(s, index, view = 1) {
  const isDetail = view > 1;
  const subtitle = isDetail ? `Detail Angle ${view}` : 'Sakhi Mangalore Signature';
  
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="100%" height="100%">
  <defs>
    <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${s.bg}" />
      <stop offset="100%" stop-color="${s.bg}" stop-opacity="0.88" />
    </linearGradient>
    <linearGradient id="gold-zari" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#99701E" />
      <stop offset="30%" stop-color="#FFD700" />
      <stop offset="70%" stop-color="#C89B3C" />
      <stop offset="100%" stop-color="#805C15" />
    </linearGradient>
    <pattern id="motif" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
      <path d="M40 10 L50 30 L70 40 L50 50 L40 70 L30 50 L10 40 L30 30 Z" fill="${s.accent}" opacity="0.15" />
      <circle cx="40" cy="40" r="6" fill="${s.border}" opacity="0.3" />
    </pattern>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- Fabric Canvas Background -->
  <rect width="800" height="1000" fill="url(#bg-grad)" />
  <rect width="800" height="1000" fill="url(#motif)" />

  <!-- Zari Border Top & Bottom -->
  <rect x="0" y="0" width="800" height="50" fill="url(#gold-zari)" />
  <rect x="0" y="950" width="800" height="50" fill="url(#gold-zari)" />

  <!-- Side Heavy Zari Border (Pallu) -->
  <rect x="700" y="0" width="100" height="1000" fill="url(#gold-zari)" opacity="0.9" />

  <!-- Decorative Border Patterns -->
  <g stroke="${s.accent}" stroke-width="2" fill="none" opacity="0.6">
    <path d="M0,60 Q400,90 800,60 M0,940 Q400,910 800,940" />
    <circle cx="750" cy="200" r="30" fill="none" stroke="#FFFFFF" opacity="0.4" />
    <circle cx="750" cy="500" r="40" fill="none" stroke="#FFFFFF" opacity="0.4" />
    <circle cx="750" cy="800" r="30" fill="none" stroke="#FFFFFF" opacity="0.4" />
  </g>

  <!-- Central Draped Silhouette Artwork -->
  <g transform="translate(150, 150)">
    <!-- Pleats Lines -->
    <path d="M 100 650 Q 250 150 400 650 M 150 650 Q 250 200 350 650 M 200 650 Q 250 250 300 650" 
          stroke="${s.border}" stroke-width="4" fill="none" opacity="0.4" />

    <!-- Center Emblem Mandala -->
    <circle cx="250" cy="320" r="110" fill="none" stroke="url(#gold-zari)" stroke-width="6" filter="url(#glow)" />
    <circle cx="250" cy="320" r="90" fill="none" stroke="${s.accent}" stroke-width="2" stroke-dasharray="8 6" opacity="0.8" />
    <circle cx="250" cy="320" r="60" fill="${s.border}" opacity="0.2" />

    <!-- Brand Typography inside Graphic -->
    <text x="250" y="315" font-family="Playfair Display, Georgia, serif" font-size="28" font-weight="700" fill="#FFFFFF" text-anchor="middle" letter-spacing="2">SAKHI</text>
    <text x="250" y="340" font-family="Poppins, sans-serif" font-size="12" font-weight="500" fill="${s.border}" text-anchor="middle" letter-spacing="4">MANGALORE</text>
  </g>

  <!-- Luxury Overlay Frame -->
  <rect x="25" y="25" width="750" height="950" fill="none" stroke="url(#gold-zari)" stroke-width="2" opacity="0.7" />

  <!-- Label Badge -->
  <rect x="50" y="860" width="400" height="60" rx="8" fill="#000000" opacity="0.4" />
  <text x="70" y="895" font-family="Playfair Display, Georgia, serif" font-size="20" font-weight="600" fill="#FFFFFF">${s.title}</text>
  <text x="70" y="910" font-family="Poppins, sans-serif" font-size="11" font-weight="400" fill="${s.border}">${subtitle}</text>
</svg>`;
}

// Generate images
styles.forEach((s, idx) => {
  const svgMain = generateSareeSVG(s, idx, 1);
  const svgDetail1 = generateSareeSVG(s, idx, 2);
  const svgDetail2 = generateSareeSVG(s, idx, 3);

  fs.writeFileSync(path.join(imagesDir, `${s.name}-1.svg`), svgMain);
  fs.writeFileSync(path.join(imagesDir, `${s.name}-2.svg`), svgDetail1);
  fs.writeFileSync(path.join(imagesDir, `${s.name}-3.svg`), svgDetail2);
});

// Also create default hero background image & logo placeholder
const heroSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <defs>
    <linearGradient id="hero-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3B2414" />
      <stop offset="50%" stop-color="#5C3A21" />
      <stop offset="100%" stop-color="#800020" />
    </linearGradient>
    <radialGradient id="gold-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#C89B3C" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#5C3A21" stop-opacity="0" />
    </radialGradient>
  </defs>
  <rect width="1920" height="1080" fill="url(#hero-grad)" />
  <circle cx="960" cy="540" r="600" fill="url(#gold-glow)" />
  <g stroke="#C89B3C" stroke-width="1" opacity="0.2" fill="none">
    <circle cx="960" cy="540" r="300" />
    <circle cx="960" cy="540" r="450" />
    <circle cx="960" cy="540" r="600" />
  </g>
</svg>`;

fs.writeFileSync(path.join(imagesDir, 'hero-banner.svg'), heroSVG);

// Generate dummy HTML5 video placeholder for local video playback
// A lightweight WebM or MP4 mock video asset / canvas video file link
console.log('Dummy images and assets created successfully!');
