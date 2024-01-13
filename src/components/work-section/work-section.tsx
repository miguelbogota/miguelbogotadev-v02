'use client';

import './work-section.scss';

import { ExperienceList } from '@app-components/experience-list/experience-list';
import { LoadingSpinner } from '@app-components/loading-spinner/loading-spinner';
import { type AppContent } from '@app-lib/content';
import { type Experience } from '@app-lib/experience';
import { useEffect, useState } from 'react';

export type WorkSectionProps = {
  content: AppContent;
};

/** Section with the work tiles. */
export function WorkSection(props: WorkSectionProps) {
  const { content } = props;

  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    if (experiences.length > 0) {
      return;
    }

    void (async () => {
      const res = await fetch('/api/experience');
      const experiences = (await res.json()) as Experience[];
      setExperiences(experiences.map((exp) => ({ ...exp, startedAt: new Date(exp.startedAt) })));
    })();
  }, [experiences]);

  return (
    <section id="work">
      <div className="work-container">
        <div className="content">
          <h2>{content.work.title}</h2>

          <p className="overline">{content.work.description}</p>
        </div>

        {experiences.length === 0 ? (
          <LoadingSpinner />
        ) : (
          <ExperienceList experiences={experiences} content={content} />
        )}
      </div>
    </section>
  );
}
