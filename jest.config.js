process.env.TZ = 'GMT';
module.exports = {
    verbose: true,
    testEnvironment: 'node',
    testTimeout: 30000,
    notify: true,
    notifyMode: 'always',
    timers: 'fake',
    maxConcurrency: 4,
    coveragePathIgnorePatterns: [
        "/node_modules/"
    ]
};