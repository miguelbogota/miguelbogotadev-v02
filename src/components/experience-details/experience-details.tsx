import './experience-details.scss';

import { Container } from '@app-components/container/container';
import { type Experience } from '@app-lib/experience';
import Image from 'next/image';

export type ExperienceDetailsProps = Experience;

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
  const { name, isActive, description, role, imageUrls, gitUrl, webUrl, startedAt, technologies } =
    props;

  const roleAndDate = `${role} — ${startedAt.getFullYear()}`;

  const gitLink = gitUrl && (
    <IconLink url={gitUrl} label="GitHub to the project" icon="bx bxl-github" />
  );

  const webLink = webUrl && (
    <IconLink url={webUrl} label="Web to the project" icon="bx bx-link-external" />
  );

  return (
    <Container className="experience-details">
      <div className="headline">
        <div className="info">
          <h1>{name}</h1>
          <div className="role">{roleAndDate}</div>
          {isActive && <div className="active">Currently Working Here</div>}
        </div>

        <div className="links">
          {gitLink}
          {webLink}
        </div>
      </div>

      <div className="images">
        <Image className="main-image" src={imageUrls[0]} alt={name} width={800} height={800} />

        <div className="preview-images">
          {imageUrls.map((url, index) => (
            <Image
              className="previe-image"
              key={index}
              src={url}
              alt={name}
              width={200}
              height={200}
            />
          ))}
        </div>

        <div className="description">
          {description.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {(technologies?.length ?? 0) > 0 && (
          <div className="technologies">
            <h2>Technologies</h2>
            {technologies?.map((technology, index) => (
              <span className="technology" key={index}>
                #{technology}
              </span>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}
