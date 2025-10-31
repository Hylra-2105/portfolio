import { motion } from "framer-motion";

export default function Hero() {
  const infoLines = [
    { label: "Location", value: '["Can Tho", "Viet Nam"]' },
    { label: "Learning", value: '["React.js"]' },
    { label: "Resume", value: '["/CV_LeThanhLoi.pdf"]' },
    { label: "Goal", value: '["Full-Stack Developer"]' },
  ];

  return (
    <section className="py-24 bg-gray-800 text-white px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold mb-4 text-left"
      >
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Le Thanh Loi
        </span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="max-w-3xl text-gray-400 leading-relaxed text-left text-xl"
      >
        <p>
          My goal is to establish a strong foundation in{" "}
          <span className="text-gray-200 font-medium">
            Frontend Development
          </span>{" "}
          and gradually expand my expertise toward{" "}
          <span className="text-gray-200 font-medium">
            Full-Stack Engineering
          </span>
          . I’m passionate about continuous learning, mastering modern
          technologies, and contributing to the creation of user-focused,
          high-quality web applications in a professional environment.
        </p>
      </motion.div>

      <motion.a
        href="#projects"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block mt-10 px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white font-medium transition text-left"
      >
        View My Work
      </motion.a>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-16 max-w-4xl border border-gray-700 bg-gray-950/60 rounded-xl p-6 shadow-lg text-green-400 font-mono"
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>

        {infoLines.map((line, i) => (
          <motion.p
            key={line.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.2 }}
            className="text-lg leading-relaxed"
          >
            <span className="text-gray-500">{"<> "}</span>
            <span className="text-cyan-400">{line.label}:</span>{" "}
            {line.label === "Resume" ? (
              <a
                href={line.value.replace(/[\[\]"]/g, "")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                [View PDF]
              </a>
            ) : (
              <span className="text-white"> {line.value}</span>
            )}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
}
