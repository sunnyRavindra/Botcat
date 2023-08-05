import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="text-lg font-bold">Botcat</div>
          <div className="text-gray-300">
            <p>About Us</p>
            <p>Company</p>
            <p>Products</p>
          </div>
        </div>
        <div className="text-gray-300">
            <p>Follow Us:</p>
            <div className="flex space-x-4 mt-2">
                <a href="#" className="hover:text-gray-400">
                    Facebook
                </a>
                <a href="#" className="hover:text-gray-400">
                    Twitter
                </a>
                <a href="#" className="hover:text-gray-400">
                    Instagram
                </a>
            </div>
        </div>
      <div className="text-gray-300">
          <p>Products:</p>
          <div className="mt-2">
              <Link href="/profile">
                  Profile
              </Link>
              <br />
              <Link className="hover:text-gray-400" href="/contact">
                  Contact Me
              </Link>
              <br />
              <Link className="hover:text-gray-400" href="/projects">
                  Projects
              </Link>
              <br />
              <Link className="hover:text-gray-400" href="/resume">
                  Resume
              </Link>
          </div>
      </div>
      </div>
      <div className="text-center mt-8 text-gray-300">
        &copy; {new Date().getFullYear()} Botcat. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
