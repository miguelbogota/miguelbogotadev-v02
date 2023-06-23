import './experience-card.scss';

import Image, { type StaticImageData } from 'next/image';
import NextLink from 'next/link';

export type ExperienceCardProps = {
  id: string;
  imageUrl: string | StaticImageData;
  displayName: string;
};

/** Singel card to show the experience */
export function ExperienceCard(props: ExperienceCardProps) {
  const { id, imageUrl, displayName } = props;

  return (
    <NextLink href={`/work/${id}`} className="experience-card">
      <Image src={imageUrl} alt={displayName} width={200} height={200} />
      <h3>{displayName}</h3>
    </NextLink>
  );
}
