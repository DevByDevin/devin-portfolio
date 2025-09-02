// 布局相关样式
export const LAYOUT_STYLES = {
  // 页面容器
  section: 'px-4 py-16 sm:px-6 lg:px-8',
  sectionAlt: 'bg-gray-50 px-4 py-16 sm:px-6 lg:px-8 dark:bg-gray-800',
  container: 'mx-auto max-w-7xl',
  containerCenter: 'mx-auto flex max-w-7xl flex-col items-center',

  // 网格布局
  grid2: 'grid gap-8 md:grid-cols-2 lg:grid-cols-3',
  grid2Cols: 'grid gap-12 lg:grid-cols-2',
  flexCenter: 'flex flex-wrap justify-center gap-4',
  flexCenterCol: 'flex flex-col justify-center gap-4 sm:flex-row',

  // 间距
  mb16: 'mb-16',
  mb10: 'mb-10',
  mb8: 'mb-8',
  mb6: 'mb-6',
  mb4: 'mb-4',
  spaceY6: 'space-y-6',
  spaceY8: 'space-y-8',
} as const;

// 排版相关样式
export const TYPOGRAPHY_STYLES = {
  // 标题
  h1: 'mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl',
  h2: 'mb-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white',
  h3: 'mb-6 text-2xl font-semibold text-gray-900 dark:text-white',
  h4: 'mb-4 text-lg font-semibold text-gray-900 lg:mb-6 lg:text-xl dark:text-white',

  // 段落
  subtitle: 'mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300',
  description: 'mx-auto mb-8 max-w-2xl text-lg text-gray-400',
  body: 'mb-4 text-sm leading-relaxed text-gray-600 lg:mb-6 lg:text-base dark:text-gray-300',
  bodyLarge: 'mx-auto mb-4 max-w-3xl text-xl text-gray-300 sm:text-2xl',

  // 文本对齐
  textCenter: 'text-center',
} as const;

// 卡片和容器样式
export const CARD_STYLES = {
  // 基础卡片
  card: 'rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800',
  cardLarge:
    'rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800',
  cardWhite: 'w-full rounded-lg bg-white p-6 shadow-sm lg:w-100 lg:p-8 dark:bg-gray-700',

  // 导航卡片
  navCard:
    'rounded-lg bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700',

  // 按钮卡片
  buttonCard:
    'inline-flex items-center rounded-lg border border-gray-400/30 bg-white/10 px-8 py-3 text-base font-medium text-white shadow-lg shadow-gray-500/20 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-gray-300/50 hover:bg-white/20 hover:shadow-xl hover:shadow-gray-500/30',
} as const;

// 按钮样式
export const BUTTON_STYLES = {
  // 导航按钮
  navButton: 'relative rounded-lg px-3 py-2 transition-all duration-300',
  navButtonActive: 'bg-blue-50 font-medium text-blue-600 dark:bg-blue-900/20 dark:text-blue-400',
  navButtonInactive:
    'text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800/50 dark:hover:text-white',

  // 移动端导航按钮
  mobileNavButton:
    'flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-all duration-200',
  mobileNavButtonActive: 'text-blue-500 bg-blue-50 dark:bg-blue-900/20',
  mobileNavButtonInactive:
    'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200',

  // 主题切换按钮
  themeButton:
    'rounded-lg bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700',
} as const;

// 标签样式
export const TAG_STYLES = {
  // 技能标签
  skillTag:
    'rounded-full bg-blue-100 px-3 py-1.5 text-xs font-medium text-blue-800 shadow-sm lg:px-4 lg:py-2 lg:text-sm',
  skillTagAlt:
    'rounded-full bg-blue-600 px-3 py-1.5 text-xs font-medium text-white shadow-sm lg:px-4 lg:py-2 lg:text-sm',

  // 技术标签
  techTag:
    'rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
} as const;

// 导航样式
export const NAVIGATION_STYLES = {
  // 头部导航
  header:
    'fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/80',
  headerContainer: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
  headerContent: 'flex h-16 items-center justify-between',

  // 移动端导航
  mobileNav:
    'fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700',
  mobileNavContainer: 'flex justify-around items-center py-3 px-4',

  // 导航项
  navItems: 'hidden space-x-8 md:flex',
  navItem: 'flex-shrink-0',
} as const;

// 表单样式
export const FORM_STYLES = {
  // 表单容器
  form: 'space-y-6',

  // 输入框组
  inputGroup: 'space-y-6',
} as const;

// 动画和过渡样式
export const ANIMATION_STYLES = {
  // 过渡
  transition: 'transition-all duration-300',
  transitionFast: 'transition-all duration-200',

  // 悬停效果
  hoverScale: 'hover:scale-105',
  hoverShadow: 'hover:shadow-lg',
} as const;

// 响应式样式
export const RESPONSIVE_STYLES = {
  // 显示/隐藏
  hiddenMd: 'hidden md:flex',
  hiddenLg: 'hidden lg:block',
  blockMd: 'block md:hidden',

  // 响应式间距
  responsivePadding: 'px-4 sm:px-6 lg:px-8',
  responsiveMargin: 'mb-4 lg:mb-6',
} as const;

// 深色模式样式
export const DARK_MODE_STYLES = {
  // 文本颜色
  textPrimary: 'text-gray-900 dark:text-white',
  textSecondary: 'text-gray-600 dark:text-gray-300',
  textTertiary: 'text-gray-400 dark:text-gray-400',

  // 背景颜色
  bgPrimary: 'bg-white dark:bg-gray-800',
  bgSecondary: 'bg-gray-50 dark:bg-gray-800',
  bgTertiary: 'bg-gray-100 dark:bg-gray-700',

  // 边框颜色
  borderPrimary: 'border-gray-200 dark:border-gray-700',
  borderSecondary: 'border-gray-300 dark:border-gray-600',
} as const;
