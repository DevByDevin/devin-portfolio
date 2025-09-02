'use client';

import { SKILL_BUBBLE_ITEMS } from '../constants/skillBubble';
import { CURRENTLY_LEARNING, SKILLS_SECTION } from '../constants/skills';
import { ExpandButton, SkillTag } from './ui';
import { useExpandableList } from '../hooks';
import SkillBubble from './SkillBubble';
import { LAYOUT_STYLES, TYPOGRAPHY_STYLES } from '../constants/styles';

export default function Skills() {
  const {
    displayedItems: displayedSkills,
    isExpanded: showAllSkills,
    toggleExpanded: toggleShowAllSkills,
    totalCount,
  } = useExpandableList({ items: SKILL_BUBBLE_ITEMS, defaultShowCount: 8 });

  return (
    <section id="skills" className={LAYOUT_STYLES.section}>
      <div className={LAYOUT_STYLES.containerCenter}>
        <div className={`${TYPOGRAPHY_STYLES.textCenter} ${LAYOUT_STYLES.mb10}`}>
          <h2 className={TYPOGRAPHY_STYLES.h2}>{SKILLS_SECTION.title}</h2>
          <p className={TYPOGRAPHY_STYLES.subtitle}>{SKILLS_SECTION.subtitle}</p>
        </div>

        <div className={`${LAYOUT_STYLES.mb10} ${LAYOUT_STYLES.flexCenter}`}>
          {displayedSkills.map((skill, index) => (
            <SkillTag key={index} name={skill.name} />
          ))}
        </div>

        <div className={`${LAYOUT_STYLES.mb10} ${TYPOGRAPHY_STYLES.textCenter}`}>
          <ExpandButton
            isExpanded={showAllSkills}
            onToggle={toggleShowAllSkills}
            totalCount={totalCount}
            hiddenCount={totalCount - 8}
          />
        </div>

        <div className={`${LAYOUT_STYLES.mb10} flex justify-center`}>
          <SkillBubble items={SKILL_BUBBLE_ITEMS} />
        </div>

        <div className={TYPOGRAPHY_STYLES.textCenter}>
          <h3 className={`${TYPOGRAPHY_STYLES.h3} ${LAYOUT_STYLES.mb8}`}>
            {SKILLS_SECTION.currentlyLearningTitle}
          </h3>
          <div className={LAYOUT_STYLES.flexCenter}>
            {CURRENTLY_LEARNING.map((skill, index) => (
              <SkillTag key={index} name={skill} variant="learning" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
