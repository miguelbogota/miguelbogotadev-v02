import { Container } from '@app-components/container/container';

export default function Work({ params }: { params: { workId: string } }) {
  return <Container as="main">work {params.workId}</Container>;
}
