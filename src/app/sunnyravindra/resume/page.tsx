import Head from 'next/head';

const Resume = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <Head>
        <title>My Resume</title>
        <meta name="description" content="My resume page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 text-black">
        {/* Your resume content here */}
      </main>
    </div>
  );
};

export default Resume;
