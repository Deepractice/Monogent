export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // 新功能
        'fix',      // 修复bug
        'docs',     // 文档变更
        'style',    // 代码格式（不影响代码运行的变动）
        'refactor', // 重构（既不是新增功能，也不是修复bug）
        'perf',     // 性能优化
        'test',     // 增加测试
        'build',    // 构建过程或辅助工具的变动
        'ci',       // CI配置
        'chore',    // 其他改动
        'revert',   // 回滚
        'wip',      // 开发中
        'arch',     // 架构变更
      ],
    ],
    'subject-case': [0], // 允许subject使用各种大小写
    'header-max-length': [2, 'always', 100],
  },
  prompt: {
    messages: {
      type: '选择你要提交的类型:',
      scope: '选择一个提交范围（可选）:',
      customScope: '请输入自定义的提交范围:',
      subject: '填写简短精炼的变更描述:\n',
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行:\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行:\n',
      footerPrefixesSelect: '选择关联issue前缀（可选）:',
      customFooterPrefix: '输入自定义issue前缀:',
      footer: '列举关联issue (可选) 例如: #31, #I3244:\n',
      confirmCommit: '是否提交或修改commit?',
    },
    types: [
      { value: 'feat', name: 'feat:     ✨  新功能', emoji: '✨' },
      { value: 'fix', name: 'fix:      🐛  修复缺陷', emoji: '🐛' },
      { value: 'docs', name: 'docs:     📝  文档变更', emoji: '📝' },
      { value: 'style', name: 'style:    💄  代码格式', emoji: '💄' },
      { value: 'refactor', name: 'refactor: ♻️   代码重构', emoji: '♻️' },
      { value: 'perf', name: 'perf:     ⚡️  性能优化', emoji: '⚡️' },
      { value: 'test', name: 'test:     ✅  测试相关', emoji: '✅' },
      { value: 'build', name: 'build:    📦️  构建相关', emoji: '📦️' },
      { value: 'ci', name: 'ci:       🎡  持续集成', emoji: '🎡' },
      { value: 'chore', name: 'chore:    🔨  其他修改', emoji: '🔨' },
      { value: 'revert', name: 'revert:   ⏪️  回退代码', emoji: '⏪️' },
      { value: 'wip', name: 'wip:      🚧  开发中', emoji: '🚧' },
      { value: 'arch', name: 'arch:     🏗️   架构调整', emoji: '🏗️' },
    ],
    scopes: [
      { value: 'hippocampus', name: 'hippocampus: 海马体记忆系统' },
      { value: 'cortex', name: 'cortex:      大脑皮层系统' },
      { value: 'docs', name: 'docs:        项目文档' },
      { value: 'config', name: 'config:      配置文件' },
      { value: 'deps', name: 'deps:        项目依赖' },
    ],
  },
}