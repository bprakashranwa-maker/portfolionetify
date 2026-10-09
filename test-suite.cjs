const fs = require('fs');
const path = require('path');

console.log('--- STARTING BUDHIPRAKASH JAT PORTFOLIO TEST SUITE ---');

let passedTests = 0;
let totalTests = 0;

function assert(description, condition) {
  totalTests++;
  if (condition) {
    console.log(`[PASS] ${description}`);
    passedTests++;
  } else {
    console.error(`[FAIL] ${description}`);
  }
}

// 1. Verify critical files exist
const criticalFiles = [
  'index.html',
  'package.json',
  '.gitignore',
  '.env.example',
  'netlify.toml',
  'public/favicon.svg',
  'public/resume/Budhiprakash_Jat_Resume.pdf',
  'src/main.jsx',
  'src/App.jsx',
  'src/index.css',
  'src/data/portfolioData.js',
  'src/components/Navbar.jsx',
  'src/components/ThemeToggle.jsx',
  'src/components/NeuralBackground.jsx',
  'src/components/ProjectModal.jsx',
  'src/components/ResumeModal.jsx',
  'src/components/SocialIcons.jsx',
  'src/components/Toast.jsx',
  'src/components/Footer.jsx',
  'src/sections/Hero.jsx',
  'src/sections/About.jsx',
  'src/sections/Skills.jsx',
  'src/sections/Projects.jsx',
  'src/sections/Education.jsx',
  'src/sections/ResumeSection.jsx',
  'src/sections/Contact.jsx',
];

for (const file of criticalFiles) {
  assert(`File exists: ${file}`, fs.existsSync(path.resolve(__dirname, file)));
}

// 2. Check .gitignore prevents secret exposure
const gitignoreContent = fs.readFileSync(path.resolve(__dirname, '.gitignore'), 'utf-8');
assert('.gitignore ignores .env', gitignoreContent.includes('.env'));
assert('.gitignore ignores .env.local', gitignoreContent.includes('.env.local'));

// 3. Check .env.example contains configuration template without real secrets
const envExampleContent = fs.readFileSync(path.resolve(__dirname, '.env.example'), 'utf-8');
assert('.env.example has VITE_EMAILJS_SERVICE_ID', envExampleContent.includes('VITE_EMAILJS_SERVICE_ID'));
assert('.env.example has VITE_EMAILJS_TEMPLATE_ID', envExampleContent.includes('VITE_EMAILJS_TEMPLATE_ID'));
assert('.env.example has VITE_EMAILJS_PUBLIC_KEY', envExampleContent.includes('VITE_EMAILJS_PUBLIC_KEY'));
assert('.env.example contains placeholder values only', envExampleContent.includes('your_emailjs_service_id_here'));

// 4. Check netlify.toml contains SPA redirect
const netlifyContent = fs.readFileSync(path.resolve(__dirname, 'netlify.toml'), 'utf-8');
assert('netlify.toml redirects /* to /index.html', netlifyContent.includes('to = "/index.html"'));

// 5. Check index.html SEO and fonts
const indexHtmlContent = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
assert('index.html has title Budhiprakash Jat', indexHtmlContent.includes('Budhiprakash Jat'));
assert('index.html has meta description', indexHtmlContent.includes('name="description"'));
assert('index.html has favicon link', indexHtmlContent.includes('href="/favicon.svg"'));

// 6. Check production build output
assert('dist/index.html exists', fs.existsSync(path.resolve(__dirname, 'dist/index.html')));

console.log(`\n--- TEST RESULTS: ${passedTests}/${totalTests} TESTS PASSED ---`);
if (passedTests === totalTests) {
  process.exit(0);
} else {
  process.exit(1);
}
