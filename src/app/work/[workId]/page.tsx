import { BackButton } from '@app-components/back-button/back-button';
import { Container } from '@app-components/container/container';
import { ExperienceDetails } from '@app-components/experience-details/experience-details';
import { getContent } from '@app-lib/content';
import { type Metadata } from 'next';
import { experienceAction } from 'src/lib/experience';

type PageProps = { params: { workId: string } };

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { params } = props;

  const experience = await experienceAction.get(params.workId);

  return {
    title: `Miguel Bogota - ${experience.displayName}`,
  };
}

export default async function Work(props: { params: { workId: string } }) {
  const { params } = props;

  const content = await getContent();
  const experience = await experienceAction.get(params.workId);

  return (
    <>
      <Container style={{ margin: 'var(--space-4) auto' }}>
        <BackButton />
      </Container>

      <ExperienceDetails content={content} experience={experience} />
    </>
  );
}
