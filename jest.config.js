const nextJest = require('next/jest');

const createJestConfig = nextJest({dir: './'});

const customerJestConfig = {
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
};

module.exportrs = createJestConfig(customJestConfig);

