import { environment } from '@app-env';
import { doc, firestore, getDoc } from '@app-lib/firebase';
import { cache } from 'react';

// import { setDoc } from 'firebase/firestore';
import { mockedContent } from './content.mock';

export type AppContent = {
  navigation: {
    title: string;
    links: {
      id: string;
      label: string;
    }[];
    resume: {
      url: string;
      label: string;
    };
  };
  profile: {
    overline: string;
    image: {
      url: string;
      alt: string;
    };
    title: string;
    description: string;
  };
  work: {
    title: string;
    description: string;
    loadMore: string;
    noMoreRecords: string;
  };
  social: {
    title: string;
    description: string;
    links: {
      label: string;
      icon: string;
      link: string;
    }[];
  };
  footer: {
    text: string;
  };
  details: {
    technologies: {
      active: string;
      title: string;
    };
  };
};

const docId = 'Oab3bfxAJMdAyUDL2hjI';

export const getContent = cache(async () => {
  if (!environment.isProdEnv) {
    // await setDoc(doc(firestore, 'content', docId), mockedContent);
    return new Promise<typeof mockedContent>((resolve) =>
      setTimeout(() => resolve(mockedContent), 1000),
    );
  }

  const docRef = doc(firestore, 'content', docId);
  const docSnapshot = await getDoc(docRef);
  return docSnapshot.data() as AppContent;
});
