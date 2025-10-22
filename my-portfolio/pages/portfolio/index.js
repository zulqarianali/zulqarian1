import { useState } from 'react';
import Layout from '../../components/Layout';
import ProjectCard from '../../components/ProjectCard';

// Mock data for all projects
const allProjects = [
  { id: 1, title: 'Commercial Ad Campaign', slug: 'commercial-ad-campaign', category: 'Video', imageUrl: 'https://via.placeholder.com/400x300/6366F1/FFFFFF?text=Project+1' },
  { id: 2, title: 'Brand Logo Animation', slug: 'brand-logo-animation', category: 'Motion', imageUrl: 'https://via.placeholder.com/400x300/EC4899/FFFFFF?text=Project+2' },
  { id: 3, title: 'Social Media Graphics Pack', slug: 'social-media-graphics', category: 'Graphics', imageUrl: 'https://via.placeholder.com/400x300/10B981/FFFFFF?text=Project+3' },
  { id: 4, title: 'Documentary Short Film', slug: 'documentary-short-film', category: 'Video', imageUrl: 'https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=Project+4' },
  { id: 5, title: 'Explainer Video', slug: 'explainer-video', category: 'Motion', imageUrl: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Project+5' },
  { id: 6, title: 'Event Poster Series', slug: 'event-poster-series', category: 'Graphics', imageUrl: 'https://via.placeholder.com/400x300/EF4444/FFFFFF?text=Project+6' },
];

const categories = ['All', 'Video', 'Motion', 'Graphics'];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === filter);

  return (
    <Layout title="Portfolio | Zulqarnain Ali">
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">My Work</h2>
            <p className="mt-4 text-lg text-gray-300">A selection of my recent projects.</p>
          </div>

          <div className="mt-12 flex justify-center space-x-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  filter === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
