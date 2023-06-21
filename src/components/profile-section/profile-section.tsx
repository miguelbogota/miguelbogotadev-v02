import './profile-section.scss';

import Image from 'next/image';
import ProfilePicture from 'public/profile-picture.png';

/** Section with the profile. */
export function ProfileSection() {
  return (
    <section id="profile">
      <div className="profile-container">
        <div className="information">
          <Image
            src={ProfilePicture}
            alt="Miguel Bogota's profile picture"
            width={120}
            height={120}
          />

          <p>Hi, I'm Miguel Bogota</p>

          <h1>
            <span>Senior Full Stack</span>
            <span>Software Engineer</span>
            <span>And Designer</span>
          </h1>

          <p className="overline">
            I'm a software developer who is passionate about making open-source projects, creating
            technology people can enjoy and cats 🐱. Some technologies I enjoy working with include
            Angular, React, ASP.NET, C# and Rust.
          </p>
        </div>

        <div className="pet">{/* 3D Pet Cat */}</div>
      </div>
    </section>
  );
}
