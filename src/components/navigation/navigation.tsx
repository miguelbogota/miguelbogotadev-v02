'use client';

import './navigation.scss';

import { Container } from '@app-components/container/container';
import { NavigationLink } from '@app-components/navigation-link/navigation-link';
import { useScrollSpy } from '@app-hooks/use-scroll-spy/use-scroll-spy';
import { type AppContent } from '@app-lib/content';

export type NavigationProps = {
  content: AppContent;
};

/** Navigation bar component. */
export function Navigation(props: NavigationProps) {
  const { content } = props;

  const activeSectionId = useScrollSpy({
    id: content.navigation.links.map((section) => section.id),
  });

  return (
    <nav>
      <Container className="navigation">
        <h3>{content.navigation.title}</h3>

        <div className="navigation-links">
          {content.navigation.links.map((section) => (
            <NavigationLink
              key={section.id}
              href={`#${section.id}`}
              active={section.id === activeSectionId}
            >
              {section.label}
            </NavigationLink>
          ))}

          <NavigationLink
            href={content.navigation.resume.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {content.navigation.resume.label}
          </NavigationLink>
        </div>
      </Container>
    </nav>
  );
}
