import {
  LAYOUT_STYLES,
  TYPOGRAPHY_STYLES,
  CARD_STYLES,
  BUTTON_STYLES,
  TAG_STYLES,
  NAVIGATION_STYLES,
  ANIMATION_STYLES,
} from '../../constants/styles';

export default function StyleGuide() {
  return (
    <div className="p-8">
      <h1 className="mb-8 text-3xl font-bold">Style Guide - 可复用的样式常量</h1>

      {/* 布局样式示例 */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">布局样式 (LAYOUT_STYLES)</h2>
        <div className="space-y-4">
          <div className={LAYOUT_STYLES.section}>
            <p>section 样式: {LAYOUT_STYLES.section}</p>
          </div>
          <div className={LAYOUT_STYLES.sectionAlt}>
            <p>sectionAlt 样式: {LAYOUT_STYLES.sectionAlt}</p>
          </div>
          <div className={LAYOUT_STYLES.container}>
            <p>container 样式: {LAYOUT_STYLES.container}</p>
          </div>
        </div>
      </section>

      {/* 排版样式示例 */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">排版样式 (TYPOGRAPHY_STYLES)</h2>
        <div className="space-y-4">
          <h1 className={TYPOGRAPHY_STYLES.h1}>H1 标题样式</h1>
          <h2 className={TYPOGRAPHY_STYLES.h2}>H2 标题样式</h2>
          <h3 className={TYPOGRAPHY_STYLES.h3}>H3 标题样式</h3>
          <p className={TYPOGRAPHY_STYLES.subtitle}>副标题样式</p>
          <p className={TYPOGRAPHY_STYLES.body}>正文样式</p>
        </div>
      </section>

      {/* 卡片样式示例 */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">卡片样式 (CARD_STYLES)</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className={CARD_STYLES.card}>
            <p>基础卡片样式</p>
          </div>
          <div className={CARD_STYLES.cardLarge}>
            <p>大卡片样式</p>
          </div>
        </div>
      </section>

      {/* 按钮样式示例 */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">按钮样式 (BUTTON_STYLES)</h2>
        <div className="space-y-4">
          <button className={`${BUTTON_STYLES.navButton} ${BUTTON_STYLES.navButtonActive}`}>
            激活的导航按钮
          </button>
          <button className={`${BUTTON_STYLES.navButton} ${BUTTON_STYLES.navButtonInactive}`}>
            未激活的导航按钮
          </button>
          <button className={BUTTON_STYLES.themeButton}>主题切换按钮</button>
        </div>
      </section>

      {/* 标签样式示例 */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">标签样式 (TAG_STYLES)</h2>
        <div className="space-y-4">
          <span className={TAG_STYLES.skillTag}>技能标签</span>
          <span className={TAG_STYLES.skillTagAlt}>技能标签 (替代样式)</span>
          <span className={TAG_STYLES.techTag}>技术标签</span>
        </div>
      </section>

      {/* 导航样式示例 */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">导航样式 (NAVIGATION_STYLES)</h2>
        <div className="space-y-4">
          <header className={NAVIGATION_STYLES.header}>
            <div className={NAVIGATION_STYLES.headerContainer}>
              <div className={NAVIGATION_STYLES.headerContent}>
                <div className={NAVIGATION_STYLES.navItem}>
                  <h1>导航头部示例</h1>
                </div>
              </div>
            </div>
          </header>
        </div>
      </section>

      {/* 动画样式示例 */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">动画样式 (ANIMATION_STYLES)</h2>
        <div className="space-y-4">
          <button
            className={`rounded bg-blue-500 px-4 py-2 text-white ${ANIMATION_STYLES.transition} ${ANIMATION_STYLES.hoverScale}`}
          >
            悬停缩放按钮
          </button>
          <div
            className={`rounded bg-gray-200 p-4 ${ANIMATION_STYLES.transitionFast} ${ANIMATION_STYLES.hoverShadow}`}
          >
            悬停阴影卡片
          </div>
        </div>
      </section>

      {/* 使用说明 */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">使用方法</h2>
        <div className="rounded bg-gray-100 p-4">
          <h3 className="mb-2 font-semibold">1. 导入样式常量</h3>
          <code className="block rounded bg-gray-200 p-2 text-sm">
            {`import { LAYOUT_STYLES, TYPOGRAPHY_STYLES } from '../constants/styles';`}
          </code>

          <h3 className="mt-4 mb-2 font-semibold">2. 在组件中使用</h3>
          <code className="block rounded bg-gray-200 p-2 text-sm">
            {`<section className={LAYOUT_STYLES.section}>
  <h2 className={TYPOGRAPHY_STYLES.h2}>标题</h2>
</section>`}
          </code>

          <h3 className="mt-4 mb-2 font-semibold">3. 组合多个样式</h3>
          <code className="block rounded bg-gray-200 p-2 text-sm">
            {`<button className={\`\${BUTTON_STYLES.navButton} \${BUTTON_STYLES.navButtonActive}\`}>
  按钮
</button>`}
          </code>
        </div>
      </section>
    </div>
  );
}
