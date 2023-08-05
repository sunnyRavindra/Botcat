import Head from 'next/head';

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <Head>
        <title>My Profile</title>
        <meta name="description" content="My profile page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 text-black">
        {/* Your profile content here */}
      </main>
    </div>
  );
};

export default Profile;
