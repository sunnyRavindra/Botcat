import Head from 'next/head';
import {Chip} from "@nextui-org/react";
import {Card, CardBody} from "@nextui-org/react";

const CompanyPage = () => {
  return (
    <div className="flex flex-col m-auto my-40 w-2/3">
      <Head>
        <title>Botcat</title>
        <meta name="description" content="About Botcat - IT Professionals Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid grid-cols-2 gap-7">
        <div className="col-span-2 ">
          <h1>BOTCAT...</h1>
          <h1>Empowering</h1>
          <h1>IT Professionals.</h1>
        </div>
        <div className="col-span-2 text-center m-20">
          <p className="text-lg text-gray-600 mb-8">
            We empower IT professionals with our innovative product, "Profiles."
          </p>
          <h2 className="text-2xl font-semibold mb-2">About Us</h2>
          <p className="text-gray-800 mb-8">
            At Botcat, we believe in helping IT professionals showcase their skills and accomplishments. Our product, "Profiles," offers a unique portfolio website solution tailored specifically for IT experts. Whether you're a developer, designer, or any other IT professional, Profiles enables you to create a stunning online presence that highlights your expertise and projects.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Product: Profiles</h2>
          <p className="text-gray-800 mb-4">
            Our flagship product, Profiles, is designed to empower IT professionals by providing them with a comprehensive platform to create and manage their own portfolio websites. With Profiles, you can effortlessly showcase your skills, projects, resume, and contact information, making it easier for potential clients and employers to connect with you.
          </p>
          <p className="text-gray-800 mb-8">
            Whether you're a freelancer looking to attract new clients, a job seeker aiming to stand out in the competitive IT industry, or simply want a professional online presence, Profiles has you covered. Our user-friendly interface, customizable templates, and seamless integration options ensure that your portfolio website reflects your unique identity and skills.
          </p>
          <div className="text-center">
            <a
              href="/profile"
              className="bg-black text-white py-2 px-4 rounded-md hover:bg-white hover:border hover:text-black hover:border-neutral-700 hover:underline transition duration-300"
            >
              Learn More About Profiles
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CompanyPage;
