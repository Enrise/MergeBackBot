module.exports = {
    '*.ts': [() => 'tsc --noEmit --pretty', 'eslint --color --fix'],
    '*.{json,md}': ['prettier --write'],
};
