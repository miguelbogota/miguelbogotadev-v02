import { ExperienceDetails } from '@app-components/experience-details/experience-details';
import { ExperienceDialog } from '@app-components/experience-dialog/experience-dialog';
import { experienceAction } from 'src/lib/experience';

export default async function WorkModalPage(props: { params: { workId: string } }) {
  const { params } = props;

  const experience = await experienceAction.get(params.workId);

  return (
    <ExperienceDialog open onCloseRedirect="/">
      <ExperienceDetails {...experience} />
    </ExperienceDialog>
  );
}
