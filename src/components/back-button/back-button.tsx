import './back-button.scss';

import Link from 'next/link';

export function BackButton() {
  return (
    <Link className="back-button" href="/">
      ←
    </Link>
  );
}
