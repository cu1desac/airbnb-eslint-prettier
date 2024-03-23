overview:react-eslint-prettier
1.eslint-config-airbnb
2.eslint-config-airbnb-typescript
3.  /* 告诉 ESLint 使用您安装的 @typescript-eslint/parser 包来解析源文件。必填的。 */
  parser: "@typescript-eslint/parser",
4./* 配置解析器的选项，例如指定ECMAScript版本、源代码类型和JSX的pragma。 */
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    jsxPragma: "React",
    ecmaFeatures: {
      jsx: true
    },
    project: true,
    tsconfigRootDir: __dirname
  },
  5.直接复制安装下面的依赖到devDependencies
  eslint eslint-config-airbnb eslint-config-airbnb-typescript eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks
  6.直接复制别人的.eslintrc.cjs ps：因为vscode安装了prettier插件，prettier会疯狂报错，下面解决
  7.安装prettier。
  pnpm add --save-dev --save-exact prettier
  8.prettierignore
  9.prettierrc.cjs
  10.# 安装eslint-plugin-prettier
pnpm install -D eslint-plugin-prettier
11.// 在 .eslintrc.* 文件里面的 extends 字段最后再添加一行：
{
  "extends": [
    ...,
    "已经配置的规则",
+   "plugin:prettier/recommended"
  ],
  "rules": {
+   "prettier/prettier": "error",
  }
}


eslint和prettier冲突参考：https://www.cnblogs.com/wanglei1900/p/17742228.html#5216085（）
除了冲突，剩下的设置都参考：https://juejin.cn/post/7293480734492246051?searchId=20240323135119F59E0CE827008A883D82