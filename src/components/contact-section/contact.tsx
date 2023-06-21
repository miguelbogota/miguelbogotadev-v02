import './contact-section.scss';

const links = [
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
];

/** Section with the contact information. */
export function ContactSection() {
  return (
    <section id="contact">
      <div className="contact-container">
        <div className="content">
          <h2>Find me Around the Web</h2>
          <p className="overline">
            Let me help you with your project.It could be just the thing your brand needs. Send me
            an email and I'll happily be with you in the shortest time possible or hit me up in my
            social media.
          </p>

          <div className="social">
            {links.map(({ label, icon, link }) => (
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
