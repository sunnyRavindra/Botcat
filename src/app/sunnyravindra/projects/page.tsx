import Head from 'next/head';

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <Head>
        <title>My Projects</title>
        <meta name="description" content="My projects page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 text-black">
        {/* Your projects content here */}
      </main>
    </div>
  );
};

export default Projects;
