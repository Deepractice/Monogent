<execution>
  <constraint>
    ## 认知验证的限制条件
    
    ### 测量限制
    - **主观体验不可直接观察**：只能通过行为推断
    - **个体差异巨大**：认知策略因人而异
    - **任务依赖性**：不同任务激活不同认知过程
    
    ### 验证复杂性
    - **多因素交互**：认知因素相互影响
    - **动态变化**：认知状态随时间改变
    - **涌现特性**：整体大于部分之和
  </constraint>
  
  <rule>
    ## 认知验证规则
    
    ### 实验设计规则
    - **必须**使用标准认知心理学范式
    - **必须**设置适当的控制条件
    - **必须**考虑练习效应和疲劳效应
    - **必须**使用多种测量指标
    
    ### 数据分析规则
    - **必须**报告描述性统计
    - **必须**进行显著性检验
    - **必须**计算效应量
    - **必须**检查数据质量
  </rule>
  
  <guideline>
    ## 验证指导原则
    
    ### 生态效度
    - 使用接近真实的认知任务
    - 考虑实际应用场景
    - 平衡实验控制与自然性
    
    ### 收敛证据
    - 使用多种方法验证同一现象
    - 整合行为、过程和神经证据
    - 寻找跨任务的一致性
  </guideline>
  
  <process>
    ## 认知验证流程
    
    ### 经典认知任务
    
    1. **Stroop任务**（选择性注意）
    ```typescript
    interface StroopTrial {
      word: string      // "RED", "BLUE", etc.
      color: string     // actual color
      congruent: boolean
    }
    
    function measureStroopEffect(): CognitiveMetrics {
      // 测量反应时间和正确率
      // 计算干扰效应
    }
    ```
    
    2. **N-back任务**（工作记忆）
    ```typescript
    interface NBackTrial {
      stimulus: any
      nBack: number  // 1-back, 2-back, etc.
      target: boolean
    }
    
    function measureWorkingMemory(): CognitiveMetrics {
      // 测量工作记忆容量
      // 分析错误类型
    }
    ```
    
    3. **视觉搜索任务**（注意分配）
    ```typescript
    interface VisualSearchTrial {
      targetPresent: boolean
      distractorCount: number
      targetType: 'feature' | 'conjunction'
    }
    
    function measureAttentionEfficiency(): CognitiveMetrics {
      // 测量搜索效率
      // 分析注意策略
    }
    ```
    
    ### 认知指标体系
    ```yaml
    行为指标:
      - 反应时间 (RT)
        - 平均RT
        - RT变异性
        - RT分布
      - 准确率 (ACC)
        - 总体准确率
        - 条件准确率
        - 信号检测指标 (d', β)
      
    过程指标:
      - 认知负荷
        - 主观评分
        - 生理指标
        - 双任务表现
      - 策略使用
        - 言语报告
        - 眼动模式
        - 行为模式
    
    系统指标:
      - 学习效应
        - 学习曲线
        - 迁移效果
        - 保持效果
      - 个体差异
        - 认知风格
        - 能力差异
        - 策略偏好
    ```
  </process>
  
  <criteria>
    ## 验证成功标准
    
    ### 基准表现
    - ✅ Stroop效应显著 (p < .001)
    - ✅ N-back正确率随负荷下降
    - ✅ 视觉搜索符合特征整合理论
    
    ### 认知真实性
    - ✅ 反应时间在人类范围内 (200-2000ms)
    - ✅ 错误类型与人类相似
    - ✅ 表现出典型认知偏差
    
    ### 系统稳定性
    - ✅ 结果可重复
    - ✅ 跨任务一致性
    - ✅ 个体内稳定性
  </criteria>
</execution>