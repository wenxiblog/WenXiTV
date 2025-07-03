{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "next/core-web-vitals"  // 使用 Next.js 默认规则配置
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "react-hooks"  // 确保 React 和 React Hooks 插件已启用
  ],
  "settings": {
    "react": {
      "version": "detect"  // 自动检测 React 版本（避免手动指定）
    }
  },
  "rules": {
    // 关闭 react 版本自动导入警告
    "react/react-in-jsx-scope": "off", 

    // React hooks 规则配置（强烈建议使用此规则）
    "react-hooks/exhaustive-deps": "warn",  // 提醒开发者关注 hooks 依赖关系

    // 忽略一些未使用变量的警告（可根据需要修改）
    "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],  // 允许以 _ 开头的未使用参数

    // 禁用对 `React` 的显式导入警告（React 17+ 无需显式导入 React）
    "react/react-in-jsx-scope": "off",

    // Vercel 部署时，防止出现未定义的规则错误
    "@next/next/no-img-element": "off", // 如果您使用 `<img>` 标签而非 Next.js `<Image>`，可以禁用此规则
    "@next/next/no-sync-scripts": "off" // 允许同步脚本（如自定义脚本），如果不符合规范则禁用此规则
  }
}
