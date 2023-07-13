import { Container } from '@app-components/container/container';
import { Footer } from '@app-components/footer/footer';
import { Navigation } from '@app-components/navigation/navigation';
import { ProfileSection } from '@app-components/profile-section/profile-section';
import { SocialSection } from '@app-components/social-section/social-section';
import { WorkSection } from '@app-components/work-section/work-section';
import { getContent } from '@app-lib/content';

export default async function Home() {
  const content = await getContent();

  return (
    <>
      <Navigation content={content} />
      <Container as="main">
        <ProfileSection />
        <WorkSection />
        <SocialSection />
      </Container>
      <Footer content={content} />
    </>
  );
}
