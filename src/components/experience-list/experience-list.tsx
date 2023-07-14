'use client';

import './experience-list.scss';

import { ExperienceCard } from '@app-components/experience-card/experience-card';
import { LoadMoreButton } from '@app-components/load-more-button/load-more-button';
import { type AppContent } from '@app-lib/content';
import { type Experience, experienceConstants } from '@app-lib/experience';
import { useState } from 'react';

export type ExperienceListProps = {
  experiences: Experience[];
  content: AppContent;
};

export function ExperienceList(props: ExperienceListProps) {
  const { experiences: serverExperiences, content } = props;

  const [experiences, setExperiences] = useState(serverExperiences);
  const [noMoreRecords] = useState(experiences.length < experienceConstants.initialLoad);

  return (
    <>
      <div className="experience">
        {experiences.map(({ id, displayName, imageUrls }) => (
          <ExperienceCard key={id} id={id} displayName={displayName} imageUrl={imageUrls[0]} />
        ))}
      </div>

      <LoadMoreButton
        content={content}
        noMoreRecords={noMoreRecords}
        lastExperience={experiences[experiences.length - 1].startedAt}
        onLoadMore={(newExperiences) => {
          setExperiences([
            ...experiences,
            ...newExperiences.map((exp) => ({
              ...exp,
              startedAt: new Date(exp.startedAt),
            })),
          ]);
        }}
      />
    </>
  );
}
