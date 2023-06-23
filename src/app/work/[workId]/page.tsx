import { ExperienceDetails } from '@app-components/experience-details/experience-details';
import { experienceAction } from 'src/lib/experience';

export default async function Work(props: { params: { workId: string } }) {
  const { params } = props;

  const experience = await experienceAction.get(params.workId);

  return <ExperienceDetails {...experience} />;
}
