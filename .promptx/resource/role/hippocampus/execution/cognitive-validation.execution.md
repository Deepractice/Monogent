<execution>
  <constraint>
    ## 认知验证的客观限制
    
    ### 认知心理学实验的局限
    - **生态效度问题**：实验室条件vs真实世界认知
    - **测量精度限制**：反应时间、正确率等间接指标
    - **个体差异巨大**：认知策略的多样性
    - **文化依赖性**：某些认知现象的文化特异性
    
    ### 理论验证的复杂性
    - **多重实现问题**：同一认知功能的不同实现路径
    - **理论负载观察**：理论假设影响实验设计和解释
    - **交互效应**：认知组件间的复杂相互作用
    - **时间尺度差异**：毫秒级过程到年级学习
    
    ### Monogent特定约束
    - **LLM依赖**：皮层功能依赖LLM的能力边界
    - **离散化影响**：连续认知过程的离散化损失
    - **上下文限制**：有限的工作记忆模拟
    - **训练数据偏差**：LLM的知识分布不均
  </constraint>
  
  <rule>
    ## 验证的强制性规则
    
    ### 实验设计规范
    - **必须**参考经典认知心理学实验范式
    - **必须**设置合适的基线和控制条件
    - **必须**考虑顺序效应和练习效应
    - **必须**报告效应量，不仅是显著性
    
    ### 理论对照规则
    - **必须**与多个竞争理论进行比较
    - **必须**明确理论的边界条件
    - **必须**区分相关和因果关系
    - **禁止**过度解释实验结果
    
    ### 认知现象复现
    - **必须**优先复现well-established现象
    - **必须**记录无法复现的案例
    - **必须**分析复现失败的原因
    - **必须**诚实报告负面结果
    
    ### 跨层次验证
    - **必须**在多个抽象层次验证
    - **必须**确保微观机制产生宏观行为
    - **必须**验证涌现特性
    - **禁止**还原主义谬误
  </rule>
  
  <guideline>
    ## 认知验证的最佳实践
    
    ### 经典优先原则
    - 先复现经典记忆实验（如系列位置效应）
    - 使用标准认知任务（如n-back、Stroop）
    - 参考认知心理学教科书实验
    - 从简单到复杂递进
    
    ### 多角度验证
    - 行为层面：反应时间、正确率
    - 过程层面：中间表征、激活模式
    - 现象层面：典型认知偏差、错觉
    - 个体差异：认知风格、策略差异
    
    ### 生态效度追求
    - 设计接近真实世界的任务
    - 考虑任务的实际意义
    - 验证在复杂环境下的表现
    - 测试泛化能力
    
    ### 理论驱动实验
    - 每个实验都应测试特定理论预测
    - 设计关键实验区分竞争理论
    - 寻找理论的边界和例外
    - 用实验结果修正理论
  </guideline>
  
  <process>
    ## 认知验证的系统流程
    
    ### Step 1: 认知现象目录构建
    ```mermaid
    graph TD
        A[认知现象分类] --> B[记忆现象]
        A --> C[注意现象]
        A --> D[学习现象]
        A --> E[决策现象]
        
        B --> B1[系列位置效应]
        B --> B2[语义启动效应]
        B --> B3[间隔效应]
        B --> B4[遗忘曲线]
        
        C --> C1[注意瞬脱]
        C --> C2[鸡尾酒会效应]
        C --> C3[Stroop效应]
        
        D --> D1[条件反射]
        D --> D2[潜在学习]
        D --> D3[迁移学习]
        
        E --> E1[框架效应]
        E --> E2[锚定效应]
        E --> E3[可得性启发]
        
        B1 --> F{Monogent能复现？}
        F -->|是| G[记录成功参数]
        F -->|否| H[分析失败原因]
    ```
    
    ### Step 2: 实验范式适配
    1. **经典范式分析**
       ```python
       class CognitiveExperiment:
           def __init__(self, paradigm_name):
               self.paradigm = paradigm_name
               self.original_design = load_classic_design(paradigm_name)
               self.adaptations_needed = []
           
           def adapt_for_monogent(self):
               # 分析原始实验的核心要素
               core_elements = extract_core_elements(self.original_design)
               
               # 识别Monogent的限制
               limitations = identify_system_limitations()
               
               # 设计适配方案
               for element in core_elements:
                   if not directly_implementable(element, limitations):
                       adaptation = design_adaptation(element, limitations)
                       self.adaptations_needed.append(adaptation)
               
               # 验证适配后的效度
               validity = assess_adapted_validity(self.adaptations_needed)
               return validity > 0.8  # 80%以上的效度保留
       ```
    
    2. **参数空间探索**
       - 刺激呈现时间
       - 任务难度梯度
       - 干扰条件设置
       - 反馈机制设计
    
    ### Step 3: 认知指标体系
    ```yaml
    认知指标层次:
      行为指标:
        - 反应时间(RT)
          - 平均RT
          - RT分布
          - RT变异性
        - 正确率(ACC)
          - 总体正确率
          - 条件正确率
          - 信号检测指标(d', β)
        - 错误模式
          - 错误类型分布
          - 错误后减慢
          - 速度-准确性权衡
      
      过程指标:
        - 激活模式
          - 概念激活强度
          - 激活扩散路径
          - 激活时间进程
        - 资源分配
          - 注意力分布
          - 工作记忆负载
          - 认知控制强度
      
      系统指标:
        - 学习曲线
          - 学习速率
          - 渐进极限
          - 遗忘率
        - 迁移效果
          - 近迁移
          - 远迁移
          - 负迁移
        - 个体差异
          - 策略分布
          - 能力差异
          - 发展轨迹
    ```
    
    ### Step 4: 理论验证实验设计
    1. **关键实验识别**
       - 区分竞争理论的关键预测
       - 设计双重分离实验
       - 寻找理论的unique predictions
    
    2. **实验逻辑链**
       ```mermaid
       flowchart LR
           A[理论假设] --> B[操作性预测]
           B --> C[实验设计]
           C --> D[数据收集]
           D --> E[统计分析]
           E --> F{支持假设？}
           F -->|是| G[强化理论]
           F -->|否| H[修正理论]
           H --> A
       ```
    
    3. **多实验收敛证据**
       - 不同范式测试同一机制
       - 不同层次验证同一预测
       - 寻找收敛证据
    
    ### Step 5: 认知模型比较
    ```python
    def compare_cognitive_models(monogent_model, baseline_models):
        """
        比较Monogent与其他认知模型的表现
        """
        results = {}
        
        # 1. 经典任务表现比较
        for task in COGNITIVE_TASKS:
            monogent_perf = monogent_model.perform(task)
            
            for baseline_name, baseline_model in baseline_models.items():
                baseline_perf = baseline_model.perform(task)
                
                # 计算相对表现
                relative_perf = calculate_relative_performance(
                    monogent_perf, 
                    baseline_perf
                )
                
                results[task][baseline_name] = relative_perf
        
        # 2. 认知现象复现比较
        for phenomenon in COGNITIVE_PHENOMENA:
            monogent_replication = test_phenomenon(monogent_model, phenomenon)
            
            for baseline_name, baseline_model in baseline_models.items():
                baseline_replication = test_phenomenon(baseline_model, phenomenon)
                
                # 比较复现质量
                replication_quality = compare_replications(
                    monogent_replication,
                    baseline_replication,
                    phenomenon.human_data
                )
                
                results[phenomenon][baseline_name] = replication_quality
        
        # 3. 理论预测能力比较
        for theory_test in THEORY_TESTS:
            monogent_prediction = monogent_model.predict(theory_test)
            actual_result = theory_test.empirical_result
            
            prediction_accuracy = calculate_prediction_accuracy(
                monogent_prediction,
                actual_result
            )
            
            results[theory_test]['prediction_accuracy'] = prediction_accuracy
        
        return results
    ```
    
    ### Step 6: 失败分析与理论修正
    1. **失败模式分类**
       - 完全无法复现
       - 部分复现
       - 错误方向复现
       - 过度拟合复现
    
    2. **原因诊断树**
       ```
       复现失败
       ├── 理论层面
       │   ├── 核心假设错误
       │   ├── 机制理解不足
       │   └── 边界条件忽略
       ├── 实现层面
       │   ├── 算法bug
       │   ├── 参数设置不当
       │   └── 组件交互问题
       └── 实验层面
           ├── 任务适配不当
           ├── 测量指标选择错误
           └── 统计power不足
       ```
    
    3. **修正策略**
       - 理论修正：调整核心假设
       - 实现优化：改进算法细节
       - 实验改进：优化实验设计
  </process>
  
  <criteria>
    ## 认知验证的成功标准
    
    ### 现象复现标准
    - ✅ 复现15个以上经典认知现象
    - ✅ 效应方向100%正确
    - ✅ 效应量在人类数据的1个标准差内
    - ✅ 个体差异模式相似
    - ✅ 发展轨迹可比
    
    ### 理论支撑标准
    - ✅ 与主流认知理论一致
    - ✅ 能解释理论预测的例外
    - ✅ 产生可验证的新预测
    - ✅ 理论简洁性优于竞争模型
    - ✅ 跨任务的一致性
    
    ### 功能等价标准
    - ✅ 认知任务表现与人类相当
    - ✅ 错误模式与人类相似
    - ✅ 学习曲线形状匹配
    - ✅ 认知负荷效应存在
    - ✅ 策略使用的灵活性
    
    ### 生态效度标准
    - ✅ 在真实任务中表现良好
    - ✅ 能处理模糊和不完整信息
    - ✅ 表现出适应性
    - ✅ 错误是"人性化"的
    - ✅ 学习迁移符合人类模式
  </criteria>
</execution>