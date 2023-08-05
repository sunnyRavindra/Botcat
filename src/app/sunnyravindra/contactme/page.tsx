import Head from 'next/head';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Contact me page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 text-black">
        <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
        <p className="text-lg mb-4">
          Feel free to get in touch with me. Fill out the form below or use the contact information provided.
        </p>

        <form className="w-full max-w-md">
          <div className="mb-4">
            <label className="block text-sm font-medium" htmlFor="name">
              Name
            </label>
            <input
              className="mt-1 px-3 py-2 w-full border rounded-md bg-white border-black focus:border-gray-400"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium" htmlFor="email">
              Email
            </label>
            <input
              className="mt-1 px-3 py-2 w-full border rounded-md bg-white border-black focus:border-gray-400"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium" htmlFor="message">
              Message
            </label>
            <textarea
              className="mt-1 px-3 py-2 w-full border rounded-md bg-white border-black focus:border-gray-400"
              id="message"
              name="message"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              className="px-4 py-2 font-semibold text-white bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:ring"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </main>

      <footer className="flex items-center justify-center w-full h-16 border-t border-black">
        <p className="text-black">© {new Date().getFullYear()} Your Name</p>
      </footer>
    </div>
  );
};

export default Contact;
