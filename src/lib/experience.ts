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

export type Experience = {
  id: string;
  name: string;
  isActive: boolean;
  description: string;
  role: string;
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
  /** Returns a promise with the latest 9 documents of the experience collection. */
  async initial() {
    const q = query(
      collection(firestore, 'experience'),
      orderBy('startedAt', 'desc'),
      limit(experienceConstants.initialLoad),
    );

    const querySnapshot = await getDocs(q);
    const experiences = querySnapshot.docs.map((doc) => {
      const data = doc.data() as Omit<Experience, 'startedAt' | 'id'> & { startedAt: Timestamp };

      return {
        id: doc.id,
        ...data,
        startedAt: data.startedAt.toDate(),
      } as Experience;
    });

    return experiences;
  },
  /** Returns a promise with a single experience document. */
  async get(id: string) {
    const docRef = doc(firestore, 'experience', id);
    const docSnapshot = await getDoc(docRef);

    if (!docSnapshot.exists()) {
      throw new Error(`Experience with id ${id} does not exist.`);
    }

    const data = docSnapshot.data() as Omit<Experience, 'startedAt' | 'id'> & {
      startedAt: Timestamp;
    };

    return { id: docSnapshot.id, ...data, startedAt: data.startedAt.toDate() } as Experience;
  },
  /** Fetch 3 more experiences and are added to the cached ones. */
  async fetchMore(after: string) {
    const q = query(
      collection(firestore, 'experience'),
      orderBy('startedAt', 'desc'),
      startAfter(Timestamp.fromDate(new Date(after))),
      limit(experienceConstants.fetchMore),
    );

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
  },
};
