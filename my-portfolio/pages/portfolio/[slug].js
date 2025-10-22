import Layout from '../../components/Layout';
import Image from 'next/image';

// This is a mock function. In a real app, you would fetch this data from a CMS or database.
const getProjectData = (slug) => {
  const allProjects = [
    { id: 1, title: 'Commercial Ad Campaign', slug: 'commercial-ad-campaign', category: 'Video', imageUrl: 'https://via.placeholder.com/1200x800/6366F1/FFFFFF?text=Project+1', problem: 'A client needed a high-energy ad for their new product launch.', role: 'Lead Video Editor', result: 'The campaign resulted in a 30% increase in online engagement.', gallery: ['https://via.placeholder.com/800x600', 'https://via.placeholder.com/800x600'] },
    { id: 2, title: 'Brand Logo Animation', slug: 'brand-logo-animation', category: 'Motion', imageUrl: 'https://via.placeholder.com/1200x800/EC4899/FFFFFF?text=Project+2', problem: 'To create a memorable and dynamic logo animation.', role: 'Motion Graphics Artist', result: 'The animation is now used across all of the brand\'s video content.', gallery: ['https://via.placeholder.com/800x600'] },
    { id: 3, title: 'Social Media Graphics Pack', slug: 'social-media-graphics', category: 'Graphics', imageUrl: 'https://via.placeholder.com/1200x800/10B981/FFFFFF?text=Project+3', problem: 'Develop a cohesive set of templates for a brand\'s social media.', role: 'Graphic Designer', result: 'Streamlined the content creation process for the client.', gallery: [] },
    // Add other projects here
  ];
  return allProjects.find(p => p.slug === slug);
};

// This function tells Next.js which paths to pre-render
export async function getStaticPaths() {
    // In a real app, you'd fetch all project slugs from a database
    const paths = [
        { params: { slug: 'commercial-ad-campaign' } },
        { params: { slug: 'brand-logo-animation' } },
        { params: { slug: 'social-media-graphics' } },
    ];
    return { paths, fallback: 'blocking' }; // Use 'blocking' to server-render new pages on-demand
}

// This function gets the data for each page at build time
export async function getStaticProps({ params }) {
    const project = getProjectData(params.slug);

    if (!project) {
        return { notFound: true };
    }

    return {
        props: { project },
        revalidate: 60, // Optional: Re-generate the page in the background every 60 seconds
    };
}


export default function ProjectPage({ project }) {
  if (!project) return <div>Loading...</div>;

  return (
    <Layout title={`${project.title} | Portfolio`}>
      <article className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">{project.title}</h1>
            <p className="mt-2 text-lg text-indigo-400">{project.category}</p>
          </div>

          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-2xl mb-12">
            <Image
              src={project.imageUrl}
              alt={project.title}
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Case Study Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-gray-300">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-4">The Problem</h2>
              <p>{project.problem}</p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Result</h2>
              <p>{project.result}</p>
            </div>
            <div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">My Role</h3>
                <p>{project.role}</p>
              </div>
            </div>
          </div>

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mt-20">
              <h2 className="text-3xl font-bold text-center text-white mb-8">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.gallery.map((image, index) => (
                  <div key={index} className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={image}
                      alt={`Project gallery image ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </Layout>
  );
}
