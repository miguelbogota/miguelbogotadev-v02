import './work-section.scss';

import { ExperienceCard } from '@app-components/experience-card/experience-card';
import ProfilePicture from 'public/profile-picture.png';

const mockedExperiences = [
  {
    id: 'aosp',
    name: 'AOSP',
    isActive: false,
    description: 'Android Open Source Project',
    role: 'Android Developer',
    imageUrls: [ProfilePicture],
    gitUrl: 'https://android.googlesource.com/',
    webUrl: 'https://source.android.com/',
    startedAt: new Date('2019-01-01'),
  },
  {
    id: 'aosp',
    name: 'AOSP',
    isActive: false,
    description: 'Android Open Source Project',
    role: 'Android Developer',
    imageUrls: [ProfilePicture],
    gitUrl: 'https://android.googlesource.com/',
    webUrl: 'https://source.android.com/',
    startedAt: new Date('2019-01-01'),
  },
  {
    id: 'aosp',
    name: 'AOSP',
    isActive: false,
    description: 'Android Open Source Project',
    role: 'Android Developer',
    imageUrls: [ProfilePicture],
    gitUrl: 'https://android.googlesource.com/',
    webUrl: 'https://source.android.com/',
    startedAt: new Date('2019-01-01'),
  },
  {
    id: 'aosp',
    name: 'AOSP',
    isActive: false,
    description: 'Android Open Source Project',
    role: 'Android Developer',
    imageUrls: [ProfilePicture],
    gitUrl: 'https://android.googlesource.com/',
    webUrl: 'https://source.android.com/',
    startedAt: new Date('2019-01-01'),
  },
  {
    id: 'aosp',
    name: 'AOSP',
    isActive: false,
    description: 'Android Open Source Project',
    role: 'Android Developer',
    imageUrls: [ProfilePicture],
    gitUrl: 'https://android.googlesource.com/',
    webUrl: 'https://source.android.com/',
    startedAt: new Date('2019-01-01'),
  },
  {
    id: 'aosp',
    name: 'AOSP',
    isActive: false,
    description: 'Android Open Source Project',
    role: 'Android Developer',
    imageUrls: [ProfilePicture],
    gitUrl: 'https://android.googlesource.com/',
    webUrl: 'https://source.android.com/',
    startedAt: new Date('2019-01-01'),
  },
  {
    id: 'aosp',
    name: 'AOSP',
    isActive: false,
    description: 'Android Open Source Project',
    role: 'Android Developer',
    imageUrls: [ProfilePicture],
    gitUrl: 'https://android.googlesource.com/',
    webUrl: 'https://source.android.com/',
    startedAt: new Date('2019-01-01'),
  },
  {
    id: 'aosp',
    name: 'AOSP',
    isActive: false,
    description: 'Android Open Source Project',
    role: 'Android Developer',
    imageUrls: [ProfilePicture],
    gitUrl: 'https://android.googlesource.com/',
    webUrl: 'https://source.android.com/',
    startedAt: new Date('2019-01-01'),
  },
  {
    id: 'aosp',
    name: 'AOSP',
    isActive: false,
    description: 'Android Open Source Project',
    role: 'Android Developer',
    imageUrls: [ProfilePicture],
    gitUrl: 'https://android.googlesource.com/',
    webUrl: 'https://source.android.com/',
    startedAt: new Date('2019-01-01'),
  },
  {
    id: 'aosp',
    name: 'AOSP',
    isActive: false,
    description: 'Android Open Source Project',
    role: 'Android Developer',
    imageUrls: [ProfilePicture],
    gitUrl: 'https://android.googlesource.com/',
    webUrl: 'https://source.android.com/',
    startedAt: new Date('2019-01-01'),
  },
  {
    id: 'aosp',
    name: 'AOSP',
    isActive: false,
    description: 'Android Open Source Project',
    role: 'Android Developer',
    imageUrls: [ProfilePicture],
    gitUrl: 'https://android.googlesource.com/',
    webUrl: 'https://source.android.com/',
    startedAt: new Date('2019-01-01'),
  },
  {
    id: 'aosp',
    name: 'AOSP',
    isActive: false,
    description: 'Android Open Source Project',
    role: 'Android Developer',
    imageUrls: [ProfilePicture],
    gitUrl: 'https://android.googlesource.com/',
    webUrl: 'https://source.android.com/',
    startedAt: new Date('2019-01-01'),
  },
  {
    id: 'aosp',
    name: 'AOSP',
    isActive: false,
    description: 'Android Open Source Project',
    role: 'Android Developer',
    imageUrls: [ProfilePicture],
    gitUrl: 'https://android.googlesource.com/',
    webUrl: 'https://source.android.com/',
    startedAt: new Date('2019-01-01'),
  },
  {
    id: 'aosp',
    name: 'AOSP With A Very Long Name That Will Break The Layout',
    isActive: false,
    description: 'Android Open Source Project',
    role: 'Android Developer',
    imageUrls: [ProfilePicture],
    gitUrl: 'https://android.googlesource.com/',
    webUrl: 'https://source.android.com/',
    startedAt: new Date('2019-01-01'),
  },
  {
    id: 'aosp',
    name: 'AOSP',
    isActive: false,
    description: 'Android Open Source Project',
    role: 'Android Developer',
    imageUrls: [ProfilePicture],
    gitUrl: 'https://android.googlesource.com/',
    webUrl: 'https://source.android.com/',
    startedAt: new Date('2019-01-01'),
  },
  {
    id: 'aosp',
    name: 'AOSP',
    isActive: false,
    description: 'Android Open Source Project',
    role: 'Android Developer',
    imageUrls: [ProfilePicture],
    gitUrl: 'https://android.googlesource.com/',
    webUrl: 'https://source.android.com/',
    startedAt: new Date('2019-01-01'),
  },
  {
    id: 'aosp',
    name: 'AOSP',
    isActive: false,
    description: 'Android Open Source Project',
    role: 'Android Developer',
    imageUrls: [ProfilePicture],
    gitUrl: 'https://android.googlesource.com/',
    webUrl: 'https://source.android.com/',
    startedAt: new Date('2019-01-01'),
  },
];

/** Section with the work tiles. */
export function WorkSection() {
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
          {mockedExperiences.map(({ id, name, imageUrls }) => (
            <ExperienceCard key={id} href={`/work/${id}`} name={name} imageUrl={imageUrls[0]} />
          ))}
        </div>
      </div>
    </section>
  );
}
