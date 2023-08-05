import Head from 'next/head';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>About Us - Botcat</title>
        <meta name="description" content="Learn about Botcat - IT Professionals Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">About Botcat</h1>
          <p className="text-lg text-gray-600 mb-8">
            Empowering IT professionals with innovative solutions.
          </p>
          <p className="text-gray-800 mb-8">
            Botcat is a leading provider of technology solutions tailored for IT professionals. Our mission is to empower individuals in the IT industry by offering innovative tools and platforms that enhance their online presence and streamline their workflow.
          </p>
          <p className="text-gray-800 mb-8">
            At Botcat, we understand the unique challenges faced by IT experts, whether you're a freelancer, consultant, or a job seeker. That's why we have developed "Profiles," a state-of-the-art product designed to help you create a professional portfolio website that showcases your skills, projects, and resume.
          </p>
          <p className="text-gray-800 mb-8">
            We are passionate about helping you succeed in the competitive IT landscape. Our team of dedicated professionals is committed to delivering top-notch solutions that cater to your specific needs. With a focus on user experience, innovation, and excellence, Botcat is your partner in achieving digital success.
          </p>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
