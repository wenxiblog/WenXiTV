
# **WenXiTV**

**WenXiTV** 是一个开箱即用的跨平台影视播放器，基于 **Next.js 14**、**Tailwind CSS** 和 **TypeScript** 打造，支持多源聚合搜索、在线播放、收藏同步、播放记录、PWA 支持和响应式布局等功能。您可以在桌面和移动设备上畅享丰富的免费视频内容。

## 功能亮点

- 🔍 **多源聚合搜索**：内置数十个免费资源站点，一次搜索即可返回所有结果。
- 📄 **丰富的影视详情页**：支持剧集列表、演员、年份、简介等完整信息展示。
- ▶️ **流畅的在线播放体验**：集成 **HLS.js** 和 **VidStack** 播放器。
- ❤️ **收藏与接续播放**：支持本地存储和云端同步。
- 📱 **PWA 支持**：离线缓存，添加至桌面/主屏，原生般使用体验。
- 🌗 **响应式布局**：自适应不同屏幕，桌面端侧边栏，移动端底部导航。
- 🚀 **极简部署**：仅需 Docker 命令或部署至 Vercel。

## 技术栈

- **应用框架**：Next.js 14（App Router）
- **UI 与样式**：Tailwind CSS 3
- **编程语言**：TypeScript 4
- **播放器**：VidStack + HLS.js
- **状态管理**：React Context / Redux Toolkit
- **代码质量**：ESLint, Prettier, Jest
- **测试**：Jest, React Testing Library, Cypress
- **部署**：Docker, Vercel

## 安装与使用

### 1. 克隆项目

```bash
git clone https://github.com/your-username/WenXiTV.git
cd WenXiTV
```

### 2. 安装依赖

```bash
npm install
# 或者使用 pnpm
pnpm install
```

### 3. 运行开发环境

```bash
npm run dev
# 或者使用 pnpm
pnpm dev
```

打开浏览器访问 `http://localhost:3000`，即可在本地体验 **WenXiTV**。

### 4. 构建生产版本

```bash
npm run build
# 或者使用 pnpm
pnpm build
```

### 5. 部署到 Vercel

如果您希望将项目部署到 Vercel，请确保已经连接到 Vercel 帐户，之后执行以下命令：

```bash
vercel --prod
```

### 6. Docker 部署

您也可以通过 Docker 部署项目：

```bash
docker build -t wenxitv .
docker run -p 3000:3000 wenxitv
```

## 代码结构

- **`components/`**: 所有 UI 组件（视频播放器、按钮、卡片等）。
- **`hooks/`**: 自定义 hooks，抽象业务逻辑。
- **`pages/`**: 页面文件，包含各种页面的路由和布局。
- **`services/`**: API 请求和数据处理服务。
- **`context/`**: 全局状态管理（如用户认证等）。

## 贡献

欢迎任何形式的贡献，您可以通过提交 Issues 和 Pull Requests 来帮助我们改进这个项目。

## 授权

这个项目使用 [MIT](https://opensource.org/licenses/MIT) 许可证进行授权。
