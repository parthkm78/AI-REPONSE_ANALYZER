const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const indexPath = path.join(publicDir, 'index.html');
const altIndexPath = path.join(publicDir, 'index-new.html');

try {
  if (!fs.existsSync(indexPath)) {
    if (fs.existsSync(altIndexPath)) {
      fs.copyFileSync(altIndexPath, indexPath);
      console.log('Copied index-new.html to index.html');
    } else {
      console.error('Neither public/index.html nor public/index-new.html exist.');
      process.exit(1);
    }
  } else {
    console.log('public/index.html already exists');
  }
} catch (err) {
  console.error('Error ensuring index.html:', err);
  process.exit(1);
}
