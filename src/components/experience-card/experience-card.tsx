import './experience-card.scss';

import NextLink from 'next/link';

export type ExperienceCardProps = {
  id: string;
  imageUrl: string;
  displayName: string;
};

/** Singel card to show the experience */
export function ExperienceCard(props: ExperienceCardProps) {
  const { id, imageUrl, displayName } = props;

  return (
    <NextLink href={`/work/${id}`} className="experience-card">
      <img src={imageUrl} alt={displayName} width={200} height={200} />
      <h3>{displayName}</h3>
    </NextLink>
  );
}
