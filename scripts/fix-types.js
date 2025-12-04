// Post-build script to fix type exports for better TypeScript resolution
const fs = require('fs');
const path = require('path');

const distIndexPath = path.join(__dirname, '..', 'dist', 'index.d.ts');

// Read the current content
let content = fs.readFileSync(distIndexPath, 'utf8');

// Replace the auto-generated export with explicit re-exports
const fixedContent = `// Explicit re-exports for better TypeScript resolution
export * from './src/components/button';
export * from './src/components/form';
export * from './src/hooks';
export {};
`;

fs.writeFileSync(distIndexPath, fixedContent, 'utf8');
console.log('✓ Fixed dist/index.d.ts for better type resolution');

