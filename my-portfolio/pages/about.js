import Layout from '../components/Layout';
import Image from 'next/image';

const skills = [
  'Adobe Premiere Pro',
  'Adobe After Effects',
  'Final Cut Pro',
  'DaVinci Resolve',
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Motion Graphics',
  'Color Grading',
  'Sound Design',
];

export default function About() {
  return (
    <Layout title="About | Zulqarnain Ali">
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">About Me</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              A Passion for Visual Storytelling
            </p>
          </div>

          <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-center">
            <div className="relative">
              <div className="rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="https://via.placeholder.com/500x500/8B5CF6/FFFFFF?text=Zulqarnain+Ali"
                  alt="Zulqarnain Ali"
                  width={500}
                  height={500}
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                />
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <p className="text-lg text-gray-300">
                Hi, I&apos;m Zulqarnain Ali, a professional Video Editor and Graphic Designer with a keen eye for detail and a passion for creating compelling visual content. With over 5 years of experience in the industry, I specialize in transforming raw footage and concepts into polished, engaging stories that resonate with audiences.
              </p>
              <p className="mt-4 text-lg text-gray-300">
                Whether it&apos;s a fast-paced commercial, an emotive documentary, or a stunning piece of motion graphics, I am dedicated to delivering the highest quality work that meets and exceeds client expectations.
              </p>
            </div>
          </div>

          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center text-white mb-8">My Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill) => (
                <span key={skill} className="bg-gray-800 text-indigo-300 text-sm font-medium px-4 py-2 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
