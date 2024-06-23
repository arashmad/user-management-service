import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/test'],
    detectOpenHandles: true,
    collectCoverage: true,
    coverageReporters: ['text', 'cobertura'],
    maxWorkers: 1
};

export default config;
