import { ExperienceDetails } from '@app-components/experience-details/experience-details';
import { ExperienceDialog } from '@app-components/experience-dialog/experience-dialog';
import ProfilePicture from 'public/profile-picture.png';

export default function WorkModalPage(props: { params: { workId: string } }) {
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

  return (
    <ExperienceDialog open onCloseRedirect="/">
      <ExperienceDetails {...work} />
    </ExperienceDialog>
  );
}
