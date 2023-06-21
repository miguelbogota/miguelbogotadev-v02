import './experience-card.scss';

import Image, { type StaticImageData } from 'next/image';

export type ExperienceCardProps = {
  href: string;
  imageUrl: string | StaticImageData;
  name: string;
};

/** Singel card to show the experience */
export function ExperienceCard(props: ExperienceCardProps) {
  const { href, imageUrl, name } = props;

  return (
    <a href={href} className="experience-card">
      <Image src={imageUrl} alt={name} width={200} height={200} />
      <h3>{name}</h3>
    </a>
  );
}
