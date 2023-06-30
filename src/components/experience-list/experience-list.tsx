'use client';

import './experience-list.scss';

import { ExperienceCard } from '@app-components/experience-card/experience-card';
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
};

export function ExperienceList(props: ExperienceListProps) {
  const { experiences: serverExperiences } = props;

  const [experiences, setExperiences] = useState(serverExperiences);
  const [isLoading, setIsLoading] = useState(false);
  const [noMoreRecords, setNoMoreRecords] = useState(false);

  return (
    <>
      <div className="experience">
        {experiences.map(({ id, name, imageUrls }) => (
          <ExperienceCard key={id} id={id} name={name} imageUrl={imageUrls[0]} />
        ))}
      </div>

      <div className="load-more-container">
        {noMoreRecords ? (
          <div className="no-more-records">That's all!</div>
        ) : (
          <motion.button
            layout
            initial="initial"
            whileHover="hover"
            className="load-more"
            onClick={() => {
              setIsLoading(true);
              void fetch(
                `/api/load-more?after=${format(experiences[experiences.length - 1].startedAt)}`,
              )
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
            }}
          >
            {isLoading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              >
                🔄
              </motion.div>
            ) : (
              <>
                <motion.div
                  variants={{ initial: { opacity: 0 }, hover: { opacity: 1, scale: 1.1 } }}
                >
                  ↓
                </motion.div>
                Load More
              </>
            )}
          </motion.button>
        )}
      </div>
    </>
  );
}
