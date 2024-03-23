// @see: https://www.prettier.cn
module.exports = {
  /* 指定最大行长度 */
  printWidth: 130,
  /* 指定缩进的空格数或制表符数 */
  tabWidth: 2,
  /* tabs缩进 (true: tabs | false: spaces) */
  useTabs: false,
  /* 语句末尾使用分号 (true: yes | false: no) */
  semi: true,
  /* 字符串中使用双引号 (true: 单引号 | false: 双引号) */
  singleQuote: false,
  /* 对象字面量中的属性名称周围使用引号 (as-needed: 需要 | consistent: 保持一致性 | preserve：保留原样) */
  quoteProps: "as-needed",
  /* JSX中使用双引号 (true: 单引号, false: 双引号)  */
  jsxSingleQuote: false,
  /* 多行对象和数组的末尾添加尾逗号(none:不添加尾随逗号 | es5: ES5 语法支持的情况下，添加尾随逗号 | all:所有可能的地方都添加尾随逗号（包括函数参数） ) */
  trailingComma: "none",
  /* 对象字面量和数组中的大括号之间添加空格,eg."{ foo: bar }" (true: yes | false: no) */
  bracketSpacing: true,
  /* 将JSX元素的 尖括号 > 放在最后一行的末尾而不是新的一行  (true: 行末尾 | false: 另起一行) */
  bracketSameLine: false,
  /* 箭头函数的单个参数省时略参数括号 (avoid: 省略 | always: 不省略括号) */
  arrowParens: "avoid",
  /* 在文件开头包含@prettier  (true: yes | false: no) */
  requirePragma: false,
  /* 文件顶部插入特殊的@format标记  (true: yes | false: no)  */
  insertPragma: false,
  /* 保持文本的换行 (preserve: 不换行 | always: 始终换行 | never: 永不换行 | minimal: 最小化换行 ) */
  proseWrap: "preserve",
  /* 控制在 HTML 中处理空格敏感度的行为 (css:据 CSS 语法规则决定 HTML 标签之间的空格格式 | strict: HTML 标签之间保持严格的空格处理 | ignore: 忽略 HTML 标签之间的空格处理) */
  htmlWhitespaceSensitivity: "css",
  /* 定义换行符的类型 (auto:自动选择适当的换行符类型 | lf:强制使用 LF（\n）作为行末换行符 | crlf:强制使用 CRLF（\r\n）作为行末换行符 | cr:强制使用 CR（\r）作为行末换行符 ) */
  endOfLine: "auto",
  /* 格式化的代码的起始 */
  rangeStart: 0,
  rangeEnd: Infinity,
};
