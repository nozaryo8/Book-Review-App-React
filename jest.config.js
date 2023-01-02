// const axios = require("axios")
// module.exports = {
//     preset: 'ts-jest',
//     testEnvironment: 'node',
//     transform: {
//         '^.+\\.ts$': 'ts-jest',
//         '^.+\\.js$': 'babel-jest',
//     },
//     transformIgnorePatterns: ['<rootDir>/node_modules/(?!axios)','/node_modules/(?!(axios)/)'],
//     moduleFileExtensions: ['ts', 'js', 'jsx', 'json'],
//     moduleNameMapper: {
//     '^axios$': require.resolve('axios'),
//     "axios": "axios/dist/node/axios.cjs"
//     },
//     "jest": {
//         "moduleNameMapper": {
//             "axios": "axios/dist/node/axios.cjs"
//         },
//         "transformIgnorePatterns": [
//             "/node_modules/(?!(axios|react-day-picker)/)"
//         ],
//         "test": "react-scripts test --transformIgnorePatterns \"node_modules/(?!axios)/\"",
//     },
//     "test": "react-scripts test --transformIgnorePatterns \"node_modules/(?!axios)/\"",
    
// };