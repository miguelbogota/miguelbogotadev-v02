import { type AppContent } from './content';

export const mockedContent: AppContent = {
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
  },
  profile: {
    overline: "Hi, I'm Miguel Bogota",
    image: {
      url: '/profile.png',
      alt: "Miguel Bogota's profile picture",
    },
    title: 'Senior Full Stack\nSoftware Engineer\nAnd Designer',
    description:
      "I'm a software developer who is passionate about making open-source projects, creating technology people can enjoy and cats 🐱. Some technologies I enjoy working with include Angular, React, ASP.NET, C# and Rust.",
  },
  work: {
    title: 'Work',
    description:
      "I care deeply about the code I write and the effect my work has on the product I'm building. You will see below some of the work I'm most proud of.",
    loadMore: 'Load More',
    noMoreRecords: 'Thank you',
  },
  social: {
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
