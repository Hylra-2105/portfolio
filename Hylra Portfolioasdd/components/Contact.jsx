import { FaEnvelope, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="text-center bg-gray-800 py-10">
      <h3 className="text-3xl font-bold mb-4 text-cyan-400">My Contact</h3>

      <div className="flex justify-center gap-6">
        <div className="flex items-center gap-2 bg-gray-700 px-6 py-3 rounded-lg text-white font-medium">
          <FaEnvelope className="w-5 h-5 text-cyan-400" />
          <p>loilt.ce190481@gmail.com</p>
        </div>

        <a
          href="https://github.com/Hylra-2105"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-medium transition"
        >
          <FaGithub className="w-5 h-5 text-cyan-400" />
          GitHub
        </a>
      </div>

      <p className="text-gray-500 text-sm mt-10">Made By Hylra © 2025.</p>
    </div>
  );
}
