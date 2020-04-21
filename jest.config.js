process.env.REACT_APP_API_URL = "https://gateway.marvel.com:443/v1/public/";
process.env.REACT_APP_API_KEY_PUBLIC = "62311e4f5bd3a5949ec639e8b6e8e086";
process.env.REACT_APP_API_KEY_PRIVATE =
  "50c31b113a4edcdab89a87f29d197aada59223a7";

module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: ".*\\.test\\.tsx$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/__mocks__/fileMock.ts",
    "\\.(css|less)$": "identity-obj-proxy",
    "src/(.*)": "<rootDir>/src/$1",
  },
  moduleDirectories: ["node_modules", "src"],
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  preset: "ts-jest",
  testEnvironment: "node",
  setupFiles: ["dotenv/config"],
};
