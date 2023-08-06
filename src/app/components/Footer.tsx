import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 border-t border-t-zinc-300">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="text-lg font-bold">Botcat</div>
          <div className="text-gray-500 space-y-2 md:space-y-0 md:space-x-4 md:flex">
            <Link href="/about">
              About Us
            </Link>
            <Link href="/company">
              Company
            </Link>
            <Link href="/products">
              Products
            </Link>
          </div>
        </div>
        <div className="text-gray-500">
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
        <div className="text-gray-500">
          <p>Products:</p>
          <div className="mt-2 space-y-2">
            <Link href="/profile">
              Profile
            </Link>
            <Link href="/contact">
              Contact Me
            </Link>
            <Link href="/projects">
              Projects
            </Link>
            <Link href="/resume">
              Resume
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-500">
        &copy; {new Date().getFullYear()} Botcat. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
