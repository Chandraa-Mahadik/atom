module.exports = {
 root: true,
 parser: '@typescript-eslint/parser',
 plugins: ['@typescript-eslint', 'react-hooks', 'import'],
 extends: ['eslint:recommended','plugin:@typescript-eslint/recommended','plugin:react-hooks/recommended','prettier'],
 env: { browser: true, es2023: true, node: true, jest: true },
 settings: { 'import/resolver': { typescript: {} } },
 rules: { 'import/order': ['warn',{ 'newlines-between':'always','alphabetize':{order:'asc'} }] }
}