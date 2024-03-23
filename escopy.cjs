module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "airbnb",
    "airbnb-typescript",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  /* 配置解析器的选项，例如指定ECMAScript版本、源代码类型和JSX的pragma。 */
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    jsxPragma: "React",
    ecmaFeatures: {
      jsx: true,
    },
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
