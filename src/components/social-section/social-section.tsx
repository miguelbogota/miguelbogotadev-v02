import './social-section.scss';

import { getContent } from '@app-lib/content';

/** Section with the social information. */
export async function SocialSection() {
  const content = await getContent();

  return (
    <section id="social">
      <div className="social-container">
        <div className="content">
          <h2>{content.social.title}</h2>
          <p className="overline">{content.social.description}</p>

          <div className="social-networks">
            {content.social.links.map(({ label, icon, link }) => (
              <a
                className="social-link"
                key={label}
                href={link}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
