import './profile-section.scss';

import { getContent } from '@app-lib/content';
import Image from 'next/image';

/** Section with the profile. */
export async function ProfileSection() {
  const content = await getContent();

  return (
    <section id="profile">
      <div className="profile-container">
        <div className="information">
          <Image
            src={content.profile.image.url}
            alt={content.profile.image.alt}
            width={120}
            height={120}
          />

          <p>{content.profile.overline}</p>

          <h1>
            {content.profile.title.split('\n').map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>

          <p className="overline">{content.profile.description}</p>
        </div>

        <div className="pet">{/* 3D Pet Cat */}</div>
      </div>
    </section>
  );
}
