'use client';

import './navigation.scss';

import { Container } from '@app-components/container/container';
import { Link } from '@app-components/link/link';
import { useScrollSpy } from '@app-hooks/use-scroll-spy/use-scroll-spy';

const sections = [
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
];

/** Navigation bar component. */
export function Navigation() {
  const activeSectionId = useScrollSpy({ id: sections.map(section => section.id) });

  return (
    <nav>
      <Container className="navigation">
        <h3>Miguel Bogota</h3>

        <div className="navigation-links">
          {sections.map(section => (
            <Link key={section.id} href={section.id} active={section.id === activeSectionId}>
              {section.label}
            </Link>
          ))}

          <Link
            href="https://firebasestorage.googleapis.com/v0/b/miguelbogotadev.appspot.com/o/Miguel%20Bogota%20Resume.pdf?alt=media&token=d2887f05-f0f2-4b73-bd28-550f52d2f2d9"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </Link>
        </div>
      </Container>
    </nav>
  );
}
