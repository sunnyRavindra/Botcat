import Head from 'next/head';

const ProfilePage = () => {
  const experience = [
    {
      title: 'Software Engineer',
      company: 'TechCorp',
      duration: 'Jan 2020 - Present',
      description: 'Worked on various web applications and projects.',
    },
    {
      title: 'Intern',
      company: 'TechStartup',
      duration: 'May 2019 - Aug 2019',
      description: 'Assisted in developing a mobile app and learned...',
    },
    // Add more experience
  ];

  const skills = [
    { name: 'Selenium Automation', level: 4 },
    { name: 'Test Automation', level: 5 },
    { name: 'Docker', level: 3 },
    { name: 'AWS', level: 3 },
    // Add more skills
  ];

  return (
    <div className="container mx-auto text-center min-h-screen w-2/3 mt-16">
      <Head>
        <title>Profile - Botcat</title>
        <meta name="description" content="My Professional Profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">My Profile</h1>

          {/* Experience Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-2">Experience</h2>
            <div className="grid gap-6">
              {experience.map((exp, index) => (
                <div key={index} className="bg-white p-4 rounded-md shadow-md">
                  <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                  <p className="text-gray-600 mb-1">{exp.company}</p>
                  <p className="text-gray-600 mb-2">{exp.duration}</p>
                  <p className="text-gray-800">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Skills</h2>
            <div className="grid gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white p-4 rounded-md shadow-md">
                  <h3 className="text-lg font-semibold mb-1">{skill.name}</h3>
                  <div className="flex items-center text-yellow-400">
                    {Array.from({ length: skill.level }, (_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 0a10 10 0 1010 10A10 10 0 0010 0zm0 18a8 8 0 118-8 8 8 0 01-8 8z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
