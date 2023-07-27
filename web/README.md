# DataVista - 数据可视化工具

DataVista 是一个旨在帮助人们理解和探索充盈的海量数据的数据可视化工具。通过 DataVista，您可以将复杂的数据转化为直观美观的可视化图表，
揭示其中蕴含的宝贵价值和洞察。无论您是数据科学家、分析师、决策者还是普通用户，DataVista 都将帮助您从数据中发现新的见解。

## 特性

- 直观美观的可视化图表：DataVista 提供多种图表类型，包括折线图、柱状图、饼图、散点图等，帮助您以最佳方式呈现数据。
- 多种数据源支持：DataVista 支持从多种数据源导入数据，包括本地文件、数据库、API 等，以满足不同数据需求。
- 交互式探索：通过 DataVista，您可以与图表进行交互，选择感兴趣的数据点、缩放、过滤数据，以便更深入地探索数据。

[//]: # (- 多平台兼容：DataVista 可在桌面、平板和移动设备上运行，适应不同的使用场景。)

## 安装

在使用之前，请确保您已经安装了 Node.js 和 pnpm。

1. 克隆仓库到本地：

```shell
git clone https://github.com/pannanxu/data-vista.git
cd data-vista/web
```

2. 安装依赖：

```shell
pnpm install
```

3. 启动：

```shell
pnpm --filter ./apps/web/ dev
```

4. 在浏览器中打开 http://localhost:3000


## 技术栈

- 运行时
  - [React.js](https://react.dev/) - JavaScript 库用于构建用户界面
  - [Next.js](https://nextjs.org/) - React 框架，用于构建静态网站和服务端渲染应用
- 开发时
  - [TypeScript](https://www.typescriptlang.org/) - JavaScript 的超集，为其添加了可选的静态类型和基于类的面向对象编程
  - [Turborepo](https://turbo.build/repo) - Turborepo is a high-performance build system for JavaScript and TypeScript codebases.
  - [Turbopack](https://turbo.build/pack) - Turbopack is an incremental bundler optimized for JavaScript and TypeScript, written in Rust.
  - [pnpm](https://pnpm.io/) - 快速、零安装、并且能实现多包共享依赖的包管理器

## 如何贡献

欢迎贡献代码、提交问题或者改进建议。

WIP

## 许可证

WIP

## 联系我们

如果您对 DataVista 有任何疑问、建议或合作事项，欢迎通过邮箱 pannanx@gmail.com 与我们联系。
