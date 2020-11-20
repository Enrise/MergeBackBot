module.exports = {
    '**/*.{ts,tsx}': [
        () => 'node_modules/.bin/tsc --noEmit --pretty',
    ],
};
