# Monogent - AI个体认知系统

基于认知心理学的AI记忆架构，构建真正的个体认知系统。

## 🧠 核心理念

Monogent 不是传统的 RAG 系统，而是模拟人类认知过程的个体认知系统。每个 Monogent 都是一个独立的认知个体，具有：

- **神经架构设计**：基于认知心理学的神经节点模型
- **语义计算能力**：五维度语义（时间、空间、因果、情感、社会）的完整计算
- **分布式记忆网络**：去中心化的认知记忆系统
- **个体认知边界**：每个个体有明确的认知能力边界和扩展机制

## 🚀 快速开始

### 环境要求

- Node.js >= 20.0.0
- pnpm >= 8.15.0

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

### 构建项目

```bash
pnpm build
```

### 运行测试

```bash
pnpm test
```

## 📦 项目结构

```
Monogent/
├── packages/          # 核心包目录
│   ├── core/         # 核心认知引擎
│   ├── memory/       # 记忆系统
│   ├── semantic/     # 语义计算引擎
│   └── utils/        # 工具函数
├── apps/             # 应用目录
├── docs/             # 文档
└── scripts/          # 脚本工具
```

## 🧪 测试策略

采用混合式测试文件组织：
- 单元测试与源代码就近放置（`*.test.ts`）
- 集成测试集中在 `__tests__/integration/`
- E2E 测试集中在 `__tests__/e2e/`

## 🛠️ 技术栈

- **运行时**: Node.js 20+
- **语言**: TypeScript 5.3+
- **包管理**: pnpm workspace
- **构建**: Turbo + tsup
- **测试**: Vitest
- **代码规范**: ESLint 9 + Prettier

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

> "个体认知系统优于RAG，语义的五维度可计算性是关键。" - Sean