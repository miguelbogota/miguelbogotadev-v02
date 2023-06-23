import { ExperienceDetails } from '@app-components/experience-details/experience-details';
import ProfilePicture from 'public/profile-picture.png';

export default function Work(props: { params: { workId: string } }) {
  const { params } = props;

  const work = {
    id: 'aosp-7',
    name: 'AOSP',
    isActive: false,
    description: 'Android Open Source Project',
    role: 'Android Developer',
    imageUrls: [ProfilePicture],
    gitUrl: 'https://android.googlesource.com/',
    webUrl: 'https://source.android.com/',
    startedAt: new Date('2019-01-01'),
  };

  return <ExperienceDetails {...work} />;
}
