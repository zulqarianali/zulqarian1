import Layout from '../components/Layout';
import { FaVideo, FaPalette, FaFilm } from 'react-icons/fa';

const services = [
  {
    icon: <FaVideo size={40} className="text-indigo-400 mb-4" />,
    title: 'Professional Video Editing',
    description: 'From corporate videos to social media content, I provide high-quality editing to tell your story effectively.',
    price: 'Starting at $300',
  },
  {
    icon: <FaPalette size={40} className="text-indigo-400 mb-4" />,
    title: 'Graphic Design',
    description: 'Logos, branding, social media assets, and more. I create visually stunning designs that capture your brand identity.',
    price: 'Starting at $150',
  },
  {
    icon: <FaFilm size={40} className="text-indigo-400 mb-4" />,
    title: 'Motion Graphics',
    description: 'Engaging motion graphics, animated logos, and explainer videos to bring your ideas to life.',
    price: 'Starting at $450',
  },
  {
    icon: <FaVideo size={40} className="text-indigo-400 mb-4" />,
    title: 'Color Grading',
    description: 'Professional color correction and grading to give your footage a cinematic and polished look.',
    price: 'Starting at $200 per project',
  }
];

export default function Services() {
  return (
    <Layout title="Services | Zulqarnain Ali">
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">Our Services</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              What I Offer
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{service.description}</p>
                <p className="text-indigo-300 font-semibold">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
