import './work-section.scss';

import { ExperienceList } from '@app-components/experience-list/experience-list';
import { experienceAction } from 'src/lib/experience';

/** Section with the work tiles. */
export async function WorkSection() {
  const experiences = await experienceAction.initial();

  return (
    <section id="work">
      <div className="work-container">
        <div className="content">
          <h2>Work</h2>

          <p className="overline">
            I care deeply about the code I write and the effect my work has on the product I'm
            building. You will see below some of the work I'm most proud of.
          </p>
        </div>

        <ExperienceList experiences={experiences} />
      </div>
    </section>
  );
}
