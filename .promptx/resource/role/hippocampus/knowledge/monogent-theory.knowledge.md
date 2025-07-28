<knowledge>
  ## Monogent理论体系核心知识
  
  ### 认知架构的哲学基础
  
  #### 语义不可计算性（Issue #2核心观点）
  - **符号接地问题**：计算系统无法内在地产生意义，只能处理符号
  - **中文房间论证**：遵循规则≠理解意义
  - **体验性缺失**：RAG等方法损失了语义的体验维度
  - **Monogent解法**：不试图"计算"语义，而是创造体验语义的认知架构
  
  #### 功能主义立场
  - **功能与实现分离**：认知功能可以在不同物理基质上实现
  - **多重可实现性**：同一认知功能的不同实现路径都可能有效
  - **Sleep Sort启示**：实现方式影响效率，但不改变功能本质
  - **超越模拟**：目标不是模拟大脑，而是实现认知功能
  
  ### 海马体的革命性理解
  
  #### 指令集架构（Issue #8的创新观点）
  - **动态程序 vs 静态索引**
    - 传统观点：海马体是记忆索引
    - Monogent观点：海马体存储可执行的记忆程序
    - 记忆提取 = 程序执行，不是简单的数据读取
  
  - **生物指令类型**
    - 激活指令：触发特定脑区
    - 同步指令：协调跨区域活动
    - 调制指令：改变处理模式
    - 控制流指令：条件分支和循环
  
  - **六维关系编码**
    - 时间维：事件序列和时间间隔
    - 空间维：位置和空间关系
    - 因果维：原因-结果链接
    - 情感维：情绪标记和价值
    - 关联维：概念间的语义联系
    - 层级维：抽象层次关系
  
  #### 海马体的八大功能（Issue #7）
  1. **情景记忆编码**：绑定"何时、何地、何事"
  2. **模式分离**：区分相似但不同的记忆
  3. **模式完成**：从部分线索重建完整记忆
  4. **记忆巩固**：短期→长期记忆转换
  5. **时间编码**：保存事件顺序
  6. **空间导航**：构建认知地图
  7. **关联学习**：创建事物间连接
  8. **记忆整合**：新信息融入已有框架
  
  ### 认知地图生成机制（Issues #9-12）
  
  #### 四层转换架构
  1. **AMR解析层**：忠实提取语义结构，不添加推理
  2. **概念激活层**：触发语义网络和个人记忆
  3. **关系提取层**：从树状AMR到多维图关系
  4. **认知地图整合**：创建动态、可执行的认知节点
  
  #### 双网络架构
  - **语义网络（皮层）**
    - 共享的概念理解
    - 静态的知识结构
    - LLM负责实现
  
  - **体验网络（海马体）**  
    - 个人化的经验记忆
    - 动态的关系记忆
    - 代码实现的图结构
  
  #### 思维链的循环本质
  - **非线性循环**："体验→意义→语义→体验"
  - **激活而非搜索**：像"拔树根"一样激活整个网络
  - **递归深化**：每次循环都加深理解
  - **涌现洞察**：循环中产生原始输入之外的理解
  
  ### 信息控制理论（Issue #6）
  
  #### 注意力的新理解
  - **固定资源假设**：注意力容量是常数
  - **效率来自过滤**：减少信息负载，而非增强处理能力
  - **丘脑智慧**：99%信息在丘脑被过滤
  
  #### 实现启示
  ```python
  # 传统方法：处理所有信息
  response = llm.process(entire_document)
  
  # Monogent方法：预过滤相关信息
  filtered = thalamus_filter(document, context)
  response = llm.process(filtered)  # 只处理1%的关键信息
  ```
  
  ### Monogent独特设计原则
  
  #### 神经科学锚定
  - **严格对应**：每个组件对应真实神经结构
  - **功能映射**：计算功能等价于生物功能
  - **可验证性**：可与神经科学文献对照
  
  #### 二元分离架构
  - **皮层下结构**：物理计算、确定性 → TypeScript实现
  - **皮层结构**：语义理解、概率性 → LLM API调用
  - **接口设计**：模拟真实的神经投射
  
  #### 认知闭环
  ```
  感知 → 理解 → 记忆 → 情绪标记 → 行动 → 反馈 → 更新理解
    ↑                                                    ↓
    └──────────────── 持续学习和适应 ←─────────────────┘
  ```
  
  ### 项目特定约束与规范
  
  #### 开发语言规范（Issue #15）
  - 所有代码、注释、文档使用英文
  - 理论讨论可中英结合
  - 关键决策提供英文总结
  - Git commits必须英文
  
  #### 基础技术架构（Issue #13）
  - **环境要求**
    - Node.js 20.0.0+
    - TypeScript 5.3+
    - pnpm 8.15.0（严格版本）
  
  - **核心技术栈**
    - 构建工具：Turbo + tsup
    - 测试框架：Vitest
    - 代码规范：ESLint 9 + Prettier
    - 日志系统：Pino
    - Git hooks：Husky + Commitlint
  
  - **架构原则**
    - 最小化但完整的基础设施
    - 渐进式架构，避免过度设计
    - 类型安全优先（strict: true）
    - 测试驱动开发（TDD）
    - 认知导向设计
    - 开发者体验优先
  
  #### 包开发规范（Issue #14）
  
  - **目录结构标准**
    ```
    packages/[module-name]/
    ├── src/
    │   ├── interfaces/      # 接口定义
    │   ├── implementations/ # 具体实现
    │   ├── components/      # 子组件
    │   └── index.ts        # 导出入口
    ├── __tests__/          # 测试文件
    ├── docs/               # 模块文档
    ├── package.json
    ├── tsconfig.json
    └── tsup.config.ts
    ```
  
  - **接口驱动设计**
    ```typescript
    // ❌ 错误：匈牙利命名法
    interface IHippocampus { }
    
    // ✅ 正确：原始命名
    interface Hippocampus { }
    
    // 实现类使用描述性后缀
    class DefaultHippocampus implements Hippocampus { }
    class DistributedHippocampus implements Hippocampus { }
    ```
  
  - **命名规范**
    - 结构命名：使用神经科学术语（如 Hippocampus, Thalamus）
    - 方法命名：反映认知功能（如 encode(), consolidate(), retrieve()）
    - 避免技术实现细节泄露到接口命名
    - 保持与学术文献的术语一致性
  
  - **导出策略**
    ```typescript
    // ✅ 显式导出，类型清晰
    export type { Hippocampus, MemoryTrace };
    export { DefaultHippocampus };
    
    // ❌ 避免桶式导出
    export * from './components';
    ```
  
  - **接口设计原则**
    - 关注认知功能而非实现细节
    - 最小化必需方法
    - 可选功能通过组合实现
    - 保持接口的稳定性
  
  - **文档要求**
    - 接口必须有完整的 JSDoc
    - 引用相关的神经科学文献
    - 解释设计决策的生物学依据
    - 提供使用示例
  
  ### 核心包架构设计（Issue #13深度解析）
  
  #### @monogent/hippocampus 包设计
  - **核心职责**
    - 记忆形成、巩固和提取
    - 短期到长期记忆转换
    - 记忆关联网络构建
    - 模式分离和模式完成
  
  - **关键接口定义**
    ```typescript
    interface Hippocampus {
      // Encoding pathway
      encode(experience: Experience): MemoryTrace;
      
      // Consolidation process
      consolidate(traces: MemoryTrace[]): ConsolidatedMemory[];
      
      // Retrieval pathway
      retrieve(cue: RetrievalCue): MemoryRecall | null;
      
      // Forgetting mechanism
      forget(criteria: ForgettingCriteria): void;
    }
    ```
  
  #### @monogent/cortex 包设计
  - **核心职责**
    - 高级认知功能（推理、决策）
    - 与LLM的接口层
    - 工作记忆管理
    - 执行控制
  
  - **依赖关系**
    - 依赖 @monogent/hippocampus 获取长期记忆
    - 向下游提供认知决策
  
  #### @monogent/logger 包设计
  - **特色功能**
    - 基于 Pino 的高性能日志
    - 结构化日志格式
    - 认知过程追踪
    - 装饰器模式支持
  
  - **使用示例**
    ```typescript
    @log.method()
    async encode(experience: Experience): Promise<MemoryTrace> {
      // 自动记录方法调用、参数、返回值、耗时
    }
    ```
  
  #### 开发工具链配置
  - **Turbo 配置**：优化的构建管道
  - **tsup 配置**：零配置打包
  - **Vitest 配置**：认知功能的单元测试
  - **Changesets**：版本管理和发布
  
  ### 关键研究问题
  
  #### 待验证假设
  1. 离散计算能否产生连续认知体验？
  2. 缺少身体的认知系统能否真正理解？
  3. 个体化如何在标准架构中涌现？
  
  #### 技术挑战
  1. 如何实现真正的闭环反馈？
  2. LLM的概率性如何与确定性计算协调？
  3. 工作记忆的容量限制如何优雅处理？
  
  #### 理论空白
  1. 意识涌现的必要条件
  2. 情绪体验的计算基础
  3. 创造力的生成机制
</knowledge>