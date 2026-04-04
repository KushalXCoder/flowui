import fs from 'fs';
import path from 'path';

// Recursively get all files in a directory and subdirectories, including their content
function getAllFilesWithContent(dir: string, baseUrl: string): { path: string; content: string }[] {
  let results: { path: string; content: string }[] = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFilesWithContent(filePath, baseUrl + '/' + file));
    } else {
      results.push({
        path: baseUrl + '/' + file,
        content: fs.readFileSync(filePath, 'utf-8')
      });
    }
  });
  return results;
}

// Define your categories here
const categories = [
  {
    name: 'auth-flow',
    title: 'Auth Flow',
    path: '/registry/flowui/blocks/auth-flow'
  }
  // Add more categories as needed
];

const sourceBaseDir = path.join(process.cwd(), 'registry', 'flowui', 'blocks');

const categoriesWithBlocks = categories.map(category => {
  const categoryDir = path.join(sourceBaseDir, category.name);
  let blocks: any[] = [];
  if (fs.existsSync(categoryDir)) {
    const blockDirs = fs.readdirSync(categoryDir).filter(f =>
      fs.statSync(path.join(categoryDir, f)).isDirectory()
    );
    blocks = blockDirs.map(blockName => {
      const blockDir = path.join(categoryDir, blockName);
      const files = getAllFilesWithContent(blockDir, `${category.path}/${blockName}`);
      return { name: blockName, files };
    });
  }
  return { ...category, blocks };
});

const output = { categories: categoriesWithBlocks };

const outputPath = path.join(process.cwd(), 'public', 'blocks', 'registry.json');
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2), 'utf-8');

console.log('Registry generated at', outputPath);