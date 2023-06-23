import { Container } from '@app-components/container/container';
import { Footer } from '@app-components/footer/footer';
import { Navigation } from '@app-components/navigation/navigation';
import { ProfileSection } from '@app-components/profile-section/profile-section';
import { SocialSection } from '@app-components/social-section/social-section';
import { WorkSection } from '@app-components/work-section/work-section';

export default function Home() {
  return (
    <>
      <Navigation />
      <Container as="main">
        <ProfileSection />
        <WorkSection />
        <SocialSection />
      </Container>
      <Footer />
    </>
  );
}
