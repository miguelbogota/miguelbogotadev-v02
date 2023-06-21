import './navigation.scss';

import { Container } from '@app-components/container/container';
import { Link } from '@app-components/link/link';

/** Navigation bar component. */
export function Navigation() {
  return (
    <nav>
      <Container className="navigation">
        <h3>Miguel Bogota</h3>

        <div className="navigation-links">
          <Link href="#profile">Profile</Link>
          <Link href="#work">Work</Link>
          <Link href="#contact">Contact</Link>

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
