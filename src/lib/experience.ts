import {
  collection,
  doc,
  firestore,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from '@app-lib/firebase';
import { Timestamp } from 'firebase/firestore';
import { cache } from 'react';

export type Experience = {
  id: string;
  displayName: string;
  isActive: boolean;
  description: string;
  displayRole: string;
  imageUrls: string[];
  technologies?: string[];
  gitUrl?: string;
  webUrl?: string;
  startedAt: Date;
};

export const experienceConstants = {
  initialLoad: 9,
  fetchMore: 3,
};

export const experienceAction = {
  /** Returns a promise with a single experience document. */
  get: cache(async (id: string) => {
    const docRef = doc(firestore, 'experience', id);
    const docSnapshot = await getDoc(docRef);

    if (!docSnapshot.exists()) {
      throw new Error(`Experience with id ${id} does not exist.`);
    }

    const data = docSnapshot.data() as Omit<Experience, 'startedAt' | 'id'> & {
      startedAt: Timestamp;
    };

    return { id: docSnapshot.id, ...data, startedAt: data.startedAt.toDate() } as Experience;
  }),
  /** Fetch the experiences and are added to the cached ones. */
  getAll: cache(async (after?: string) => {
    let q = query(
      collection(firestore, 'experience'),
      orderBy('startedAt', 'desc'),
      limit(experienceConstants.initialLoad),
    );

    if (after) {
      q = query(
        collection(firestore, 'experience'),
        orderBy('startedAt', 'desc'),
        startAfter(Timestamp.fromDate(new Date(after))),
        limit(experienceConstants.fetchMore),
      );
    }

    const querySnapshot = await getDocs(q);
    const experiences = querySnapshot.docs.map((doc) => {
      const data = doc.data() as Omit<Experience, 'startedAt' | 'id'> & { startedAt: Timestamp };

      return {
        id: doc.id,
        ...data,
        startedAt: data.startedAt.toDate(),
      } as Experience;
    });

    return experiences.length > 0 ? experiences : { lastRecord: true };
  }),
};
