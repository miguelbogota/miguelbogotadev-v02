'use client';

import { useLayoutEffect, useRef, useState } from 'react';

const clamp = (value: number) => Math.max(0, value);

const isBetween = (value: number, floor: number, ceil: number) => value >= floor && value <= ceil;

/** Options for the useScrollspy hook. */
export type UseScrollSpyOptions = {
  /** The ids of the elements to spy on. */
  id: string[];
  /** The offset from the top of the viewport to use when calculating the active id. */
  offset?: number;
};

/**
 * Spies on elements with the given ids and returns the active id (the id of the element that is
 * currently in view).
 */
export function useScrollSpy(options: UseScrollSpyOptions) {
  const { id, offset = 0 } = options;

  const prevActiveSectionId = useRef('');
  const [activeSectionId, setActiveSectionId] = useState('');

  useLayoutEffect(() => {
    const listener = () => {
      const scroll = window.scrollY;

      const position = id
        .map(section => {
          const element = document.getElementById(section);

          if (!element) {
            return { section, top: -1, bottom: -1 };
          }

          const rect = element.getBoundingClientRect();
          const top = clamp(rect.top + scroll - offset);
          const bottom = clamp(rect.bottom + scroll - offset);

          return { section, top, bottom };
        })
        .find(({ top, bottom }) => isBetween(scroll, top, bottom));

      const activeSectionId = position?.section ?? '';

      if (prevActiveSectionId.current === activeSectionId) {
        return;
      }

      prevActiveSectionId.current = activeSectionId;
      setActiveSectionId(activeSectionId);
    };

    listener();

    window.addEventListener('resize', listener);
    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('resize', listener);
      window.removeEventListener('scroll', listener);
    };
  }, [id, offset]);

  return activeSectionId;
}
