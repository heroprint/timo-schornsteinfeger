const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

// Publish only website files; local previews and screenshots stay out of Pages.
const output = path.join(__dirname, 'dist');
const files = ['index.html', 'styles.css', 'modern.css', 'script.js', 'Logo.jpeg', 'assets/mark.svg'];
for (const file of files) {
  const target = path.join(output, file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(path.join(__dirname, file), target);
}
fs.writeFileSync(path.join(output, '.nojekyll'), '');
// Changed CSS and JavaScript get a new URL so browsers do not reuse old files.
const htmlPath = path.join(output, 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8').replace(
  /(href|src)="(styles\.css|modern\.css|script\.js)"/g,
  (_, attribute, file) => {
    const version = crypto.createHash('sha256').update(fs.readFileSync(path.join(output, file))).digest('hex').slice(0, 12);
    return `${attribute}="${file}?v=${version}"`;
  }
);
fs.writeFileSync(htmlPath, html);
process.stdout.write(`Prepared ${files.length} website files in dist/\n`);
