'use client';

import './experience-details.scss';

import { BackButton } from '@app-components/back-button/back-button';
import { Container } from '@app-components/container/container';
import { Footer } from '@app-components/footer/footer';
import { type AppContent } from '@app-lib/content';
import { type Experience } from '@app-lib/experience';
import clsx from 'clsx';
import { useState } from 'react';

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

  const [selectedImage, setSelectedImage] = useState(imageUrls[0]);

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
        {!isDialog && <BackButton />}

        <div className="info">
          <span className="name">
            <h1>{displayName}</h1>
            {isActive && (
              <span className="active">{`(${content.details.technologies.active})`}</span>
            )}
          </span>
          <p className="role">{roleAndDate}</p>
        </div>

        <div className="links">
          {gitLink}
          {webLink}
        </div>
      </div>

      <div className="images">
        <picture>
          <source srcSet={selectedImage.full[400]} media="(max-width: 800px)" />
          <img
            className="main-image"
            src={selectedImage.full[800]}
            alt={displayName}
            width={800}
            height={800}
            loading="lazy"
            style={{
              backgroundImage: `url(${selectedImage.full[200]})`,
            }}
          />
        </picture>

        <div className="preview-images">
          {imageUrls.map((url, index) => (
            <img
              className={clsx('preview-image', url === selectedImage && 'is-selected')}
              key={index}
              src={url.thumbnail[400]}
              alt={displayName}
              width={90}
              height={90}
              loading="lazy"
              onClick={() => setSelectedImage(url)}
              style={{
                backgroundImage: `url(${url.thumbnail[200]})`,
              }}
            />
          ))}
        </div>
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
              #{technology}
            </span>
          ))}
        </div>
      )}

      <Footer content={content} />
    </Container>
  );
}
