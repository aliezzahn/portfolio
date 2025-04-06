import path from 'path';
import fs from 'fs';

// Define source and destination directories
console.log('__dirname', __dirname);
const srcDir = path.resolve(__dirname, './src/components/projects');
const destDir = path.resolve(__dirname, './public/projects');

// Function to delete a directory and its contents recursively
function deleteFolderRecursiveSync(dirPath) {
  if (fs.existsSync(dirPath)) {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    for (const entry of entries) {
      const currentPath = path.join(dirPath, entry.name);
      if (entry.isDirectory()) {
        deleteFolderRecursiveSync(currentPath); // Recursively delete directories
      } else {
        fs.unlinkSync(currentPath); // Delete file
      }
    }
    fs.rmdirSync(dirPath); // Remove the empty directory
  }
}

// Recursively copy files from srcDir to destDir
function copyFolderRecursiveSync(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyFolderRecursiveSync(srcPath, destPath); // Recursively copy directories
    } else {
      fs.copyFileSync(srcPath, destPath); // Copy files
    }
  }
}

// Check if the destination folder exists and delete it before copying
if (fs.existsSync(destDir)) {
  console.log('Deleting existing projects folder...');
  deleteFolderRecursiveSync(destDir); // Delete the destination folder
}

console.log('Copying new files to projects folder...');
copyFolderRecursiveSync(srcDir, destDir); // Copy the new files

// Random helper functions
function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomSize() {
  const sizes = ['0.3 KB', '1.2 KB', '2.1 KB', '4.2 KB', '3.2 KB'];
  return getRandomItem(sizes);
}

function getRandomCommitData() {
  const commits = [
    { commit: 'Add new button component', time: '5 days ago' },
    { commit: 'Fix card shadow', time: '1 week ago' },
    { commit: 'Update README.md', time: '2 days ago' },
    { commit: 'Configure image domains', time: '1 week ago' },
    { commit: 'Update navbar links', time: '2 weeks ago' },
    { commit: 'Add new dashboard page', time: '2 days ago' },
    { commit: 'Initial commit', time: '1 month ago' },
    { commit: 'Fix homepage responsiveness', time: '3 days ago' },
  ];
  return getRandomItem(commits);
}

// Mock random commit data
function getFilesAndFolders(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const result = [];

  entries.forEach((entry) => {
    if (entry.name === 'fileList.json') return;

    const entryPath = path.join(dir, entry.name);
    const randomCommit = getRandomCommitData();

    if (entry.isDirectory()) {
      result.push({
        name: entry.name,
        type: 'directory',
        lastCommit: randomCommit.commit,
        lastCommitTime: randomCommit.time,
        children: getFilesAndFolders(entryPath),
      });
    } else {
      result.push({
        name: entry.name,
        type: 'file',
        size: getRandomSize(),
        lastCommit: randomCommit.commit,
        lastCommitTime: randomCommit.time,
      });
    }
  });

  return result;
}

// Root of all projects
const projectsRoot = path.resolve(__dirname, 'public', 'projects');

// Get all folders inside /projects
const projects = fs
  .readdirSync(projectsRoot, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

// Process each project
projects.forEach((projectName) => {
  const projectPath = path.join(projectsRoot, projectName);
  const fileList = getFilesAndFolders(projectPath);
  const fileListPath = path.join(projectPath, 'fileList.json');

  fs.writeFileSync(fileListPath, JSON.stringify(fileList, null, 2));
  console.log(`✅ Generated fileList.json for project: ${projectName}`);
});
