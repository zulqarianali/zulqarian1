import Layout from '../../components/Layout';
import Head from 'next/head';

// This is a mock function. In a real app, you would fetch this data from a CMS or database.
const getPostData = (slug) => {
    const posts = [
      { id: 1, title: '5 Tips for Cinematic Video Editing', slug: '5-tips-cinematic-editing', date: 'October 22, 2025', content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>' },
      { id: 2, title: 'The Power of a Strong Brand Identity', slug: 'power-of-brand-identity', date: 'October 15, 2025', content: '<p>Praesentium, voluptatibus, et, quae, quas, quos, quibusdam, quidem, quod, voluptate, voluptatem, voluptates. ...</p>' },
      { id: 3, title: 'Getting Started with Motion Graphics in After Effects', slug: 'getting-started-motion-graphics', date: 'October 8, 2025', content: '<p>Quisquam, quae, quod, quibusdam, quidem, quos, quod, quas, quasi, quem, qui, quia, quo, quod. ...</p>' },
    ];
    return posts.find(p => p.slug === slug);
};

export async function getStaticPaths() {
    const paths = [
        { params: { slug: '5-tips-cinematic-editing' } },
        { params: { slug: 'power-of-brand-identity' } },
        { params: { slug: 'getting-started-motion-graphics' } },
    ];
    return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
    const post = getPostData(params.slug);
    if (!post) {
        return { notFound: true };
    }
    return { props: { post }, revalidate: 60 };
}


export default function PostPage({ post }) {
  return (
    <Layout>
        <Head>
            <title>{post.title} | Blog</title>
        </Head>
        <div className="py-20 bg-gray-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white">{post.title}</h1>
                    <p className="mt-2 text-sm text-gray-400">{post.date}</p>
                </div>

                <div
                    className="prose prose-invert prose-lg mx-auto text-gray-300"
                    dangerouslySetInnerHTML={{ __html: post.content }} // Using mock HTML content
                />
            </div>
        </div>
    </Layout>
  );
}
