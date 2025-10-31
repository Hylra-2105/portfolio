export default function Header() {
  return (
    <header className="flex justify-between items-center px-10 py-6 border-b border-gray-700 sticky top-0 bg-gray-800 z-50 backdrop-blur">
      <a
        href="#home"
        className="text-2xl font-bold text-cyan-400 cursor-pointer"
      >
        MyPortfolio
      </a>
      <nav className="flex gap-6 text-gray-300">
        <a href="#projects" className="hover:text-cyan-400 transition">
          Projects
        </a>
        <a href="#contact" className="hover:text-cyan-400 transition">
          Contact
        </a>
      </nav>
    </header>
  );
}
