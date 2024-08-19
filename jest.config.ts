export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        "^.+\\.tsx?$": "ts-jest" 
    // process `*.tsx` files with `ts-jest`
    },
    moduleNameMapper: {
        "\\.(gif|ttf|eot|svg|png|css|jpg)$": "<rootDir>/src/test/__mocks__/fileMock.ts"
    },
}
