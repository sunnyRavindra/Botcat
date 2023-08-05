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
        <h1 className="text-4xl font-bold mb-6 underline">Resume</h1>
        <div className="mb-8 text-center">
          <div className="flex justify-center space-x-4">
            <a
              href="/resume.docx"
              download="my_resume.docx"
              className="py-2 px-4 bg-white text-black rounded-md border border-neutral-700 hover:text-white hover:bg-black transition duration-300 hover:underline"
            >
              Download as Docx
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Resume;
