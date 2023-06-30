import { doc, firestore, getDoc } from '@app-lib/firebase';
import { type StaticImageData } from 'next/image';
import ProfilePicture from 'public/profile-picture.png';
import { cache } from 'react';

const mockedContent: AppContent = {
  navigation: {
    title: 'Miguel Bogota',
    links: [
      {
        id: 'profile',
        label: 'Profile',
      },
      {
        id: 'work',
        label: 'Work',
      },
      {
        id: 'social',
        label: 'Social',
      },
    ],
    resume: {
      url: 'https://firebasestorage.googleapis.com/v0/b/miguelbogotadev.appspot.com/o/Miguel%20Bogota%20Resume.pdf?alt=media&token=d2887f05-f0f2-4b73-bd28-550f52d2f2d9',
      label: 'Resume',
    },
  },
  profile: {
    id: 'profile',
    overline: "Hi, I'm Miguel Bogota",
    image: {
      url: ProfilePicture,
      alt: "Miguel Bogota's profile picture",
    },
    title: 'Senior Full Stack\nSoftware Engineer\nAnd Designer',
    description:
      "I'm a software developer who is passionate about making open-source projects, creating technology people can enjoy and cats 🐱. Some technologies I enjoy working with include Angular, React, ASP.NET, C# and Rust.",
  },
  work: {
    id: 'work',
    title: 'Work',
    description:
      "I care deeply about the code I write and the effect my work has on the product I'm building. You will see below some of the work I'm most proud of.",
    loadMore: 'Load More',
    noMoreRecords: "That's all!",
  },
  social: {
    id: 'social',
    title: 'Find me Around the Web',
    description:
      "Let me help you with your project.It could be just the thing your brand needs. Send me an email and I'll happily be with you in the shortest time possible or hit me up in my social media.",
    links: [
      {
        label: 'Email link',
        icon: 'bx bxs-envelope',
        link: 'mailto:contact@miguelbogota.dev',
      },
      {
        label: 'GitHub profile link',
        icon: 'bx bxl-github',
        link: 'https://github.com/miguelbogota',
      },
      {
        label: 'LinkedIn profile link',
        icon: 'bx bxl-linkedin-square',
        link: 'https://linkedin.com/in/miguelbogota',
      },
      {
        label: 'Instagram profile link',
        icon: 'bx bxl-instagram-alt',
        link: 'https://instagram.com/migue_bogota',
      },
      {
        label: 'Dev.to profile link',
        icon: 'bx bxl-dev-to',
        link: 'https://dev.to/miguelbogota',
      },
    ],
  },
  footer: {
    text: 'Designed & Built by Miguel Bogota',
  },
  details: {
    technologies: {
      active: 'Currently Working Here',
      title: 'Technologies',
    },
  },
};

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
    id: string;
    overline: string;
    image: {
      url: string | StaticImageData;
      alt: string;
    };
    title: string;
    description: string;
  };
  work: {
    id: string;
    title: string;
    description: string;
    loadMore: string;
    noMoreRecords: string;
  };
  social: {
    id: string;
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
  // const docRef = doc(firestore, 'content', docId);
  // const docSnapshot = await getDoc(docRef);
  // return docSnapshot.data() as AppContent;
  return new Promise<typeof mockedContent>((resolve) =>
    setTimeout(() => resolve(mockedContent), 1000),
  );
});
