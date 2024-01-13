'use client';

import './load-more-button.scss';

import { LoadingSpinner } from '@app-components/loading-spinner/loading-spinner';
import { type AppContent } from '@app-lib/content';
import { type Experience, experienceConstants } from '@app-lib/experience';
import { formatDate } from '@app-utils/format-date';
import { useState } from 'react';

export type LoadMoreButtonProps = {
  content: AppContent;
  lastExperience: Date;
  onLoadMore?: (newExperiences: Experience[]) => void;
  noMoreRecords?: boolean;
};

/** Component with the load more button in the experience list. */
export function LoadMoreButton(props: LoadMoreButtonProps) {
  const { content, lastExperience, onLoadMore, noMoreRecords: noMoreRecordsProp = false } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [noMoreRecords, setNoMoreRecords] = useState(noMoreRecordsProp);

  const loadMore = async () => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);

    const res = await fetch(`/api/experience?after=${formatDate(lastExperience)}`);
    const newExperiences = (await res.json()) as Experience[] | { lastRecord: boolean };

    if ('lastRecord' in newExperiences) {
      setIsLoading(false);
      setNoMoreRecords(true);
      return;
    }
    onLoadMore?.(newExperiences);
    setIsLoading(false);
    if (newExperiences.length < experienceConstants.fetchMore) {
      setNoMoreRecords(true);
    }
  };

  return (
    <div className="load-more-container">
      {noMoreRecords ? (
        <div className="no-more-records">{content.work.noMoreRecords}</div>
      ) : isLoading ? (
        <LoadingSpinner />
      ) : (
        <button className="load-more" onClick={loadMore}>
          {content.work.loadMore}
        </button>
      )}
    </div>
  );
}
