import './experience-details.scss';

import { Container } from '@app-components/container/container';
import { type AppContent } from '@app-lib/content';
import { type Experience } from '@app-lib/experience';
import clsx from 'clsx';
import Image from 'next/image';

export type ExperienceDetailsProps = {
  experience: Experience;
  content: AppContent;
  isDialog?: boolean;
};

const IconLink = ({ url, label, icon }: { url?: string; label: string; icon: string }) => (
  <a
    className="social-link"
    href={url}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className={icon} />
  </a>
);

export function ExperienceDetails(props: ExperienceDetailsProps) {
  const { experience, content, isDialog = false } = props;
  const {
    id,
    displayName,
    isActive,
    description,
    displayRole,
    imageUrls,
    gitUrl,
    webUrl,
    startedAt,
    technologies,
  } = experience;

  const roleAndDate = `${displayRole} — ${startedAt.getFullYear()}`;

  const gitLink = gitUrl && (
    <IconLink url={gitUrl} label="Link to project's Github" icon="bx bxl-github" />
  );

  const webLink = webUrl && (
    <IconLink url={webUrl} label="Link to project's web" icon="bx bx-link-external" />
  );

  return (
    <Container id={id} className="experience-details">
      <div className={clsx('headline', isDialog && 'is-dialog')}>
        <div className="info">
          <h1>{displayName}</h1>
          <div className="role">{roleAndDate}</div>
          {isActive && <div className="active">{content.details.technologies.active}</div>}
        </div>

        <div className="links">
          {gitLink}
          {webLink}
        </div>
      </div>

      <div className="images">
        <Image
          className="main-image"
          src={imageUrls[0]}
          alt={displayName}
          width={800}
          height={800}
        />

        <div className="preview-images">
          {imageUrls.map((url, index) => (
            <Image
              className="previe-image"
              key={index}
              src={url}
              alt={displayName}
              width={200}
              height={200}
            />
          ))}
        </div>

        <div className="description">
          {description.split('\\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {(technologies?.length ?? 0) > 0 && (
          <div className="technologies">
            <h2>{content.details.technologies.title}</h2>
            {technologies?.map((technology, index) => (
              <span className="technology" key={index}>
                {technology}
              </span>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}
