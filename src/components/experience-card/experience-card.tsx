import './experience-card.scss';

import Image from 'next/image';
import NextLink from 'next/link';

export type ExperienceCardProps = {
  id: string;
  imageUrl: string;
  name: string;
};

/** Singel card to show the experience */
export function ExperienceCard(props: ExperienceCardProps) {
  const { id, imageUrl, name } = props;

  return (
    <NextLink href={`/work/${id}`} className="experience-card">
      <Image src={imageUrl} alt={name} width={200} height={200} />
      <h3>{name}</h3>
    </NextLink>
  );
}
