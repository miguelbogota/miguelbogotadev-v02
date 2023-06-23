import './experience-details.scss';

import { type StaticImageData } from 'next/image';

export type ExperienceDetailsProps = {
  id: string;
  name: string;
  isActive: boolean;
  description: string;
  role: string;
  imageUrls: (string | StaticImageData)[];
  gitUrl?: string;
  webUrl?: string;
  startedAt: Date;
};

export function ExperienceDetails(props: ExperienceDetailsProps) {
  const { name, isActive, description, role, imageUrls, gitUrl, webUrl, startedAt } = props;

  return (
    <div className="experience-details">
      <h1>Welcome to ExperienceDetails!</h1>
    </div>
  );
}
