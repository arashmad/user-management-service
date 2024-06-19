"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/test'],
    detectOpenHandles: true,
    maxWorkers: 1
};
exports.default = config;
