import Head from 'next/head';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <Head>
        <title>About Me</title>
        <meta name="description" content="About me page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 text-black">
        {/* Your about content here */}
      </main>
    </div>
  );
};

export default About;
