import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import dynamic from 'next/dynamic';

// Dynamically import the Hero component for performance
const DynamicHero = dynamic(() => import('../components/Hero'), { ssr: false });

// Mock data for featured projects
const featuredProjects = [
  {
    id: 1,
    title: 'Commercial Ad Campaign',
    slug: 'commercial-ad-campaign',
    category: 'Video',
    imageUrl: 'https://via.placeholder.com/400x300/6366F1/FFFFFF?text=Project+1',
  },
  {
    id: 2,
    title: 'Brand Logo Animation',
    slug: 'brand-logo-animation',
    category: 'Motion',
    imageUrl: 'https://via.placeholder.com/400x300/EC4899/FFFFFF?text=Project+2',
  },
  {
    id: 3,
    title: 'Social Media Graphics Pack',
    slug: 'social-media-graphics',
    category: 'Graphics',
    imageUrl: 'https://via.placeholder.com/400x300/10B981/FFFFFF?text=Project+3',
  },
];

export default function Home() {
  return (
    <Layout>
      <DynamicHero />
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
