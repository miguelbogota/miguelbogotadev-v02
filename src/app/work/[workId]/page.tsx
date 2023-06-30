import { Container } from '@app-components/container/container';
import { ExperienceDetails } from '@app-components/experience-details/experience-details';
import { getContent } from '@app-lib/content';
import Link from 'next/link';
import { experienceAction } from 'src/lib/experience';

export default async function Work(props: { params: { workId: string } }) {
  const { params } = props;

  const content = await getContent();
  const experience = await experienceAction.get(params.workId);

  return (
    <>
      <Container>
        <Link href="/">Go Back</Link>
      </Container>

      <ExperienceDetails content={content} experience={experience} />
    </>
  );
}
