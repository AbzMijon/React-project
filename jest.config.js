module.exports = {
    testEnvironment: "jsdom",
    moduleFileExtensions: ["js", "ts", "jsx", "tsx"],
    moduleDirectories: ["node_modules", "src"],
    transform: {
        "^.+\\.scss$": 'jest-scss-transform',
    },
};