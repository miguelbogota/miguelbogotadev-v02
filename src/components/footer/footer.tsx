import './footer.scss';

import { type AppContent } from '@app-lib/content';

export type FooterProps = {
  content: AppContent;
};

/** Footer component */
export function Footer(props: FooterProps) {
  const { content } = props;

  return <footer>{content.footer.text}</footer>;
}
