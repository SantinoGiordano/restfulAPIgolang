const Navbar: React.FC = () => {
  return (
    <nav className="bg-green-500 p-8 fixed w-full z-10">
      <div className="mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-4xl font-bold">
          MySite
        </a>
        <div className="space-x-8 flex items-center">
          <a
            href="/"
            className="font-thin text-2xl text-white hover:text-gray-300"
          >
            Home
          </a>
          <a
            href="/albums"
            className="font-thin text-2xl text-white hover:text-gray-300"
          >
            Albums
          </a>

          <a
            href="/contact"
            className="font-thin text-2xl text-white hover:text-gray-300"
          >
            Contact
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
