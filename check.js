const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');
const start = content.indexOf('<script>');
const end = content.lastIndexOf('</script>');
const js = content.slice(start + 8, end);
try {
  new Function(js);
  console.log('JS OK');
} catch(e) {
  console.log('JS ERROR:', e.message);
}
