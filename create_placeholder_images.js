#!/usr/bin/env node

/**
 * Script to create placeholder images for features
 * Run with: node create_placeholder_images.js
 */

const fs = require('fs');
const path = require('path');

// Simple SVG placeholder generators
const createFeaturePlaceholder = (featureNumber, featureTitle) => {
  const colors = [
    { bg: '#667eea', accent: '#764ba2' },
    { bg: '#f093fb', accent: '#f5576c' },
    { bg: '#4facfe', accent: '#00f2fe' },
    { bg: '#43e97b', accent: '#38f9d7' },
  ];
  
  const color = colors[featureNumber % colors.length];
  
  return `
<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad${featureNumber}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color.bg};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color.accent};stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="600" height="400" fill="url(#grad${featureNumber})" />
  
  <!-- Decorative elements -->
  <circle cx="100" cy="50" r="30" fill="rgba(255,255,255,0.2)" />
  <circle cx="550" cy="350" r="40" fill="rgba(255,255,255,0.15)" />
  
  <!-- Interface mockup -->
  <rect x="50" y="80" width="500" height="250" rx="10" fill="white" opacity="0.95" />
  
  <!-- Header bar -->
  <rect x="50" y="80" width="500" height="40" rx="10" fill="${color.bg}" />
  <text x="70" y="108" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="white">${featureTitle}</text>
  
  <!-- Content elements -->
  <rect x="70" y="140" width="200" height="15" rx="3" fill="#e0e0e0" />
  <rect x="70" y="165" width="450" height="10" rx="3" fill="#f0f0f0" />
  <rect x="70" y="180" width="450" height="10" rx="3" fill="#f0f0f0" />
  <rect x="70" y="195" width="300" height="10" rx="3" fill="#f0f0f0" />
  
  <!-- Action button -->
  <rect x="70" y="230" width="120" height="35" rx="20" fill="${color.bg}" />
  <text x="130" y="255" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">Learn More</text>
</svg>
  `.trim();
};

// Create static/img folder if it doesn't exist
const imgDir = path.join(__dirname, 'static', 'img');
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}

// Generate placeholder images
const features = [
  { num: 1, title: 'Case Selection' },
  { num: 2, title: 'Patient Chat' },
  { num: 3, title: 'Diagnostics' },
  { num: 4, title: 'Management' },
];

features.forEach(feature => {
  const svg = createFeaturePlaceholder(feature.num, feature.title);
  const filePath = path.join(imgDir, `feature-${feature.num}.png`);
  
  // For now, save as SVG (browsers support SVG natively)
  const svgPath = path.join(imgDir, `feature-${feature.num}.svg`);
  fs.writeFileSync(svgPath, svg);
  console.log(`✓ Created ${svgPath}`);
});

console.log('\nNote: SVG placeholders created. In production, replace with actual PNG/JPG screenshots.');
console.log('To convert SVGs to PNG, you can use tools like:');
console.log('  - npm install -g svgo sharp');
console.log('  - Or use an online SVG to PNG converter');
