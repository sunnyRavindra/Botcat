import Head from 'next/head';
import Link from 'next/link';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description of Project 1...',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of Project 2...',
    },
    // Add more projects
  ];

  return (
    <div className="min-h-screen mt-20">
      <Head>
        <title>Projects - Botcat</title>
        <meta name="description" content="Explore My Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-lg text-gray-600 mb-8">
            Explore the projects I've worked on.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <div
                key={project.id}
                className="bg-white p-6 rounded-md shadow-md transition duration-300 hover:shadow-lg"
              >
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-800">{project.description}</p>
                <div className="mt-4">
                  <Link className="text-blue-500 hover:underline" href={`/projects/${project.id}`}>
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
