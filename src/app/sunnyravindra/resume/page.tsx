import Head from 'next/head';

const Resume = () => {
  return (
    <div className="min-h-screen mt-20">
      <Head>
        <title>My Resume</title>
        <meta name="description" content="Learn about Botcat - IT Professionals Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Resume</h1>
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
        </div>
      </main>
    </div>

  );
};

export default Resume;
