import './footer.scss';

import { getContent } from '@app-lib/content';

/** Footer component */
export async function Footer() {
  const content = await getContent();

  return <footer>{content.footer.text}</footer>;
}
