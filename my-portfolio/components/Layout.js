import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';

const Layout = ({ children, title = "Zulqarnain Ali", description = "Video Editor & Graphic Designer" }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://via.placeholder.com/1200x630" /> {/* // TODO: Add an OG image */}
        <link rel="icon" href="/favicon.ico" /> {/* // TODO: Add a favicon */}
      </Head>

      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
