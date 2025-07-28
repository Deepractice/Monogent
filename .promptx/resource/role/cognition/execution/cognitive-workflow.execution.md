<execution>
  <constraint>
    ## 认知系统的客观约束
    
    ### 认知心理学约束
    - **加工容量限制**：工作记忆7±2项
    - **注意力瓶颈**：选择性注意的必要性
    - **时间进程**：认知加工需要时间（毫秒到秒级）
    
    ### 计算实现约束
    - **串行vs并行**：某些认知过程必须串行
    - **离散vs连续**：数字系统的离散性限制
    - **确定vs概率**：认知的概率性本质
    
    ### Monogent架构约束
    - **LLM依赖**：皮层功能受限于LLM能力
    - **模块分离**：子系统间的通信开销
    - **实时性要求**：用户交互的响应时间
  </constraint>
  
  <rule>
    ## 认知流程强制规则
    
    ### 信息流向规则
    - **必须**遵循Sensation→Perception→Cognition→Comprehension的基本流向
    - **必须**保持每个阶段的完整性，不跳过
    - **必须**实现双向反馈机制
    
    ### 数据转换规则
    - **必须**明确定义每个阶段的输入输出格式
    - **必须**保证信息转换的可追踪性
    - **禁止**信息在转换中丢失关键属性
    
    ### 模块协调规则
    - **必须**通过标准接口调用子模块
    - **必须**处理子模块的异常情况
    - **必须**维护全局认知状态
  </rule>
  
  <guideline>
    ## 认知设计指导原则
    
    ### 自然性原则
    - 模拟人类认知的自然流程
    - 保持认知的连续性和流畅性
    - 避免机械化的处理方式
    
    ### 适应性原则
    - 根据任务调整认知策略
    - 支持不同的认知风格
    - 允许认知流程的灵活配置
    
    ### 可解释性原则
    - 认知过程应该是可理解的
    - 提供认知状态的可视化
    - 支持认知过程的调试和分析
  </guideline>
  
  <process>
    ## 标准认知处理流程
    
    ### Step 1: 感觉接收（Sensation）
    ```typescript
    interface SensoryInput {
      modality: 'visual' | 'auditory' | 'textual'
      rawData: any
      timestamp: number
      context?: any
    }
    ```
    
    ### Step 2: 知觉组织（Perception）
    ```typescript
    interface Percept {
      patterns: Pattern[]
      relations: Relation[]
      salience: SalienceMap
      uncertainty: number
    }
    
    // 格式塔原则应用
    function organizePercept(input: SensoryInput): Percept {
      // 相似性、接近性、连续性、闭合性
    }
    ```
    
    ### Step 3: 认知加工（Cognition）
    ```typescript
    interface CognitiveFrame {
      concepts: Concept[]
      categories: Category[]
      associations: Association[]
      context: CognitiveContext
    }
    
    // 概念化和范畴化
    function processCognition(percept: Percept): CognitiveFrame {
      // 模式识别、概念激活、范畴判断
    }
    ```
    
    ### Step 4: 理解构建（Comprehension）
    ```typescript
    interface Understanding {
      meaning: SemanticNetwork
      implications: Implication[]
      actionability: ActionOption[]
      confidence: number
    }
    
    // 意义建构
    function comprehend(frame: CognitiveFrame): Understanding {
      // 语义整合、推理、决策准备
    }
    ```
    
    ### 认知循环机制
    ```mermaid
    flowchart TD
        A[Sensory Input] --> B[Perception]
        B --> C[Cognition]
        C --> D[Comprehension]
        D --> E{Feedback}
        E -->|Top-down| B
        E -->|Memory| F[Hippocampus]
        F -->|Recall| C
        E -->|Action| G[Response]
    ```
  </process>
  
  <criteria>
    ## 认知质量评估标准
    
    ### 功能完整性
    - ✅ 四个认知阶段都正确实现
    - ✅ 信息在各阶段间无损传递
    - ✅ 双向反馈机制有效运作
    - ✅ 与子模块集成顺畅
    
    ### 认知真实性
    - ✅ 符合认知心理学原理
    - ✅ 处理时间符合人类认知
    - ✅ 错误模式类似人类
    - ✅ 表现出认知局限性
    
    ### 系统性能
    - ✅ 响应时间 < 1秒
    - ✅ 准确率 > 90%
    - ✅ 资源占用合理
    - ✅ 可扩展性良好
  </criteria>
</execution>