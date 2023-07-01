import { ExperienceDetails } from '@app-components/experience-details/experience-details';
import { ExperienceDialog } from '@app-components/experience-dialog/experience-dialog';
import { getContent } from '@app-lib/content';
import { experienceAction } from 'src/lib/experience';

type PageProps = { params: { workId: string } };

export default async function WorkModalPage(props: PageProps) {
  const { params } = props;

  const content = await getContent();
  const experience = await experienceAction.get(params.workId);

  return (
    <ExperienceDialog open onCloseRedirect="/" title={`Miguel Bogota - ${experience.name}`}>
      <ExperienceDetails content={content} experience={experience} isDialog />
    </ExperienceDialog>
  );
}
