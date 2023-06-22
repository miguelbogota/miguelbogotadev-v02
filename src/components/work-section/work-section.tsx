import './work-section.scss';

import { ExperienceCard } from '@app-components/experience-card/experience-card';
import ProfilePicture from 'public/profile-picture.png';

const mockedExperiences = [
  {
    id: 'aosp-1',
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
    id: 'aosp-2',
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
    id: 'aosp-3',
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
    id: 'aosp-4',
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
    id: 'aosp-5',
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
    id: 'aosp-6',
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
    id: 'aosp-7',
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
    id: 'aosp-8',
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
    id: 'aosp-9',
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
    id: 'aosp-10',
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
    id: 'aosp-11',
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
    id: 'aosp-12',
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
    id: 'aosp-13',
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
    id: 'aosp-14',
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
    id: 'aosp-15',
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
    id: 'aosp-16',
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
    id: 'aosp-17',
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
            <ExperienceCard key={id} id={id} name={name} imageUrl={imageUrls[0]} />
          ))}
        </div>
      </div>
    </section>
  );
}
