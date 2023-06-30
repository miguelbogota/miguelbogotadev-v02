import './work-section.scss';

import { ExperienceList } from '@app-components/experience-list/experience-list';
import { getContent } from '@app-lib/content';
import { experienceAction } from 'src/lib/experience';

/** Section with the work tiles. */
export async function WorkSection() {
  const experiences = await experienceAction.initial();
  const content = await getContent();

  return (
    <section id={content.work.id}>
      <div className="work-container">
        <div className="content">
          <h2>{content.work.title}</h2>

          <p className="overline">{content.work.description}</p>
        </div>

        <ExperienceList experiences={experiences} content={content} />
      </div>
    </section>
  );
}
