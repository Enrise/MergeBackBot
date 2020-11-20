module.exports = {
    '*.ts': [
        () => 'tsc --noEmit --pretty',
        'eslint --color --fix'
    ],
    '*.json': ['prettier --write'],
};
