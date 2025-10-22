import Layout from '../../components/Layout';
import Link from 'next/link';

// Mock data for blog posts
const posts = [
  {
    id: 1,
    title: '5 Tips for Cinematic Video Editing',
    slug: '5-tips-cinematic-editing',
    date: 'October 22, 2025',
    excerpt: 'Discover five essential techniques to give your video projects a professional, cinematic feel.',
  },
  {
    id: 2,
    title: 'The Power of a Strong Brand Identity',
    slug: 'power-of-brand-identity',
    date: 'October 15, 2025',
    excerpt: 'Learn why a cohesive brand identity is crucial for success and how graphic design plays a pivotal role.',
  },
  {
    id: 3,
    title: 'Getting Started with Motion Graphics in After Effects',
    slug: 'getting-started-motion-graphics',
    date: 'October 8, 2025',
    excerpt: 'A beginner\'s guide to the fundamental principles of motion graphics using Adobe After Effects.',
  },
];

export default function Blog() {
  return (
    <Layout title="Blog | Zulqarnain Ali">
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">From the Blog</h2>
            <p className="mt-4 text-lg text-gray-300">Insights on video editing, design, and creativity.</p>
          </div>

          <div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-1 lg:max-w-none">
            {posts.map((post) => (
              <div key={post.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <p className="text-sm text-gray-400">{post.date}</p>
                  <Link href={`/blog/${post.slug}`} className="block mt-2">
                    <p className="text-xl font-semibold text-white hover:text-indigo-400 transition-colors">{post.title}</p>
                    <p className="mt-3 text-base text-gray-400">{post.excerpt}</p>
                  </Link>
                  <div className="mt-4">
                    <Link href={`/blog/${post.slug}`} className="text-indigo-400 hover:text-indigo-300 font-semibold">
                      Read more &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
