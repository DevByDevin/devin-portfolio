'use client';

import { SKILL_BUBBLE_ITEMS } from '../constants/skillBubble';
import { CURRENTLY_LEARNING } from '../constants/skills';
import { ExpandButton, SkillTag } from './ui';
import { useExpandableList } from '../hooks';
import SkillBubble from './ui/SkillBubble';

import { useTranslations } from 'next-intl';

export default function Skills() {
  const t = useTranslations('skills');

  const {
    displayedItems: displayedSkills,
    isExpanded: showAllSkills,
    toggleExpanded: toggleShowAllSkills,
    totalCount,
  } = useExpandableList({ items: SKILL_BUBBLE_ITEMS, defaultShowCount: 8 });

  return (
    <section id="skills" className="section">
      <div className="container-center">
        <div className="mb-10 text-center">
          <h2 className="h2">{t('title')}</h2>
          <p className="subtitle">{t('subtitle')}</p>
        </div>

        <div className="flex-center mb-10">
          {displayedSkills.map((skill, index) => (
            <SkillTag key={index} name={skill.name} />
          ))}
        </div>

        <div className="mb-10 text-center">
          <ExpandButton
            isExpanded={showAllSkills}
            onToggle={toggleShowAllSkills}
            totalCount={totalCount}
            hiddenCount={totalCount - 8}
          />
        </div>

        <div className="mb-10 flex justify-center">
          <SkillBubble items={SKILL_BUBBLE_ITEMS} />
        </div>

        <div className="text-center">
          <h3 className="h3 mb-8">{t('currentlyLearningTitle')}</h3>
          <div className="flex-center">
            {CURRENTLY_LEARNING.map((skill, index) => (
              <SkillTag key={index} name={skill} variant="learning" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
