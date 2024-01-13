import './experience-card.scss';

import NextLink from 'next/link';

export type ExperienceCardProps = {
  id: string;
  imageUrl: {
    200: string;
    400: string;
    800: string;
  };
  displayName: string;
};

/** Singel card to show the experience */
export function ExperienceCard(props: ExperienceCardProps) {
  const { id, imageUrl, displayName } = props;

  return (
    <NextLink href={`/work/${id}`} className="experience-card">
      <picture>
        <source srcSet={imageUrl[400]} media="(max-width: 800px)" />
        <img
          src={imageUrl[800]}
          alt={displayName}
          width={200}
          height={200}
          loading="lazy"
          style={{
            backgroundImage: `url(${imageUrl[200]})`,
          }}
        />
      </picture>
      <h3>{displayName}</h3>
    </NextLink>
  );
}
