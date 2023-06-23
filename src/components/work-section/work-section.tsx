import './work-section.scss';

import { ExperienceCard } from '@app-components/experience-card/experience-card';
import { experienceAction } from 'src/lib/experience';

/** Section with the work tiles. */
export async function WorkSection() {
  const experiences = await experienceAction.all();

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

        <div className="experience">
          {experiences.map(({ id, displayName, imageUrls }) => (
            <ExperienceCard key={id} id={id} displayName={displayName} imageUrl={imageUrls[0]} />
          ))}
        </div>
      </div>
    </section>
  );
}
