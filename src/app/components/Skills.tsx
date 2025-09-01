import { SKILLS_ITEMS, SKILLS_CENTER } from '../constants/skillFlower';
import { SKILL_CATEGORIES, CURRENTLY_LEARNING, SKILLS_SECTION } from '../constants/skills';
import SkillFlower from './SkillFlower';

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            {SKILLS_SECTION.title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            {SKILLS_SECTION.subtitle}
          </p>
        </div>

        <div className="mb-16 flex justify-center">
          <SkillFlower items={SKILLS_ITEMS} center={SKILLS_CENTER} size={2} />
        </div>

        <div className="grid w-full max-w-5xl gap-4 md:grid-cols-3">
          {SKILL_CATEGORIES.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800"
            >
              <h3 className="mb-4 text-center text-lg font-semibold text-gray-900 dark:text-white">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                      <div
                        className="h-1.5 rounded-full bg-blue-600 transition-all duration-300"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="mb-8 text-2xl font-semibold text-gray-900 dark:text-white">
            {SKILLS_SECTION.currentlyLearningTitle}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {CURRENTLY_LEARNING.map((skill, index) => (
              <span
                key={index}
                className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
