const fs = require('node:fs');
const path = require('node:path');

// Publish only website files; local previews and screenshots stay out of Pages.
const output = path.join(__dirname, 'dist');
const files = ['index.html', 'styles.css', 'modern.css', 'script.js', 'Logo.jpeg', 'assets/mark.svg'];
for (const file of files) {
  const target = path.join(output, file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(path.join(__dirname, file), target);
}
fs.writeFileSync(path.join(output, '.nojekyll'), '');
process.stdout.write(`Prepared ${files.length} website files in dist/\n`);
