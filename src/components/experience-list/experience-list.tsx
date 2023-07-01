'use client';

import './experience-list.scss';

import { ExperienceCard } from '@app-components/experience-card/experience-card';
import { LoadingSpinner } from '@app-components/loading-spinner/loading-spinner';
import { type AppContent } from '@app-lib/content';
import { type Experience } from '@app-lib/experience';
import { motion } from 'framer-motion';
import { useState } from 'react';

/** Returns the `date` formatted in YYYY-MM-DD. */
function format(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export type ExperienceListProps = {
  experiences: Experience[];
  content: AppContent;
};

export function ExperienceList(props: ExperienceListProps) {
  const { experiences: serverExperiences, content } = props;

  const [experiences, setExperiences] = useState(serverExperiences);
  const [isLoading, setIsLoading] = useState(false);
  const [noMoreRecords, setNoMoreRecords] = useState(false);

  const loadMore = () => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);

    void fetch(`/api/load-more?after=${format(experiences[experiences.length - 1].startedAt)}`)
      .then((res) => res.json() as Promise<Experience[] | { lastRecord: boolean }>)
      .then((newExperiences) => {
        if ('lastRecord' in newExperiences) {
          setIsLoading(false);
          setNoMoreRecords(true);
          return;
        }

        setExperiences([
          ...experiences,
          ...newExperiences.map((exp) => ({
            ...exp,
            startedAt: new Date(exp.startedAt),
          })),
        ]);
        setIsLoading(false);
      });
  };

  return (
    <>
      <div className="experience">
        {experiences.map(({ id, name, imageUrls }) => (
          <ExperienceCard key={id} id={id} name={name} imageUrl={imageUrls[0]} />
        ))}
      </div>

      <div className="load-more-container">
        {noMoreRecords ? (
          <div className="no-more-records">{content.work.noMoreRecords}</div>
        ) : (
          <motion.button
            layout
            initial="initial"
            whileHover="hover"
            className="load-more"
            onClick={loadMore}
          >
            {isLoading ? <LoadingSpinner /> : content.work.loadMore}
          </motion.button>
        )}
      </div>
    </>
  );
}
