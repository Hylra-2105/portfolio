import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const [zoomImg, setZoomImg] = useState(null);

  const projects = [
    {
      title: "Blog Platform (On Working)",
      description: `A modern blogging platform UI built with React.  
      Features include post list and detail pages, author pages, category navigation,  
      and interactive statistics dashboard.

        Team: 5 members
        
        My Role:
        • Designed and developed the UI layout with responsive side navigation  
        • Implemented blog post list & detail pages  
        • Built statistics dashboard using Recharts  
        • Developed sidebar navigation and route handling  
        `,
      tech: ["ReactJS", "JavaScript", "TailwindCSS", "CSS"],
      images: [
        "/images/anh-19.png",
        "/images/anh-20.png",
        "/images/anh-21.png",
        "/images/anh-22.png",
        "/images/anh-23.png",
      ],
      github: "https://github.com/NgocPMT/FA25_FER202_GROUP_3",
    },
    {
      title: "Tour Booking UI",
      description:
        "Created a responsive tour booking frontend using HTML, CSS, JavaScript. Focused on clean design, interactive forms, and an intuitive user experience for booking and tour management.",
      tech: ["HTML", "CSS", "JavaScript"],
      images: [
        "/images/anh-24.png",
        "/images/anh-25.png",
        "/images/anh-26.png",
        "/images/anh-27.png",
        "/images/anh-28.png",
        "/images/anh-29.png",
        "/images/anh-30.png",
        "/images/anh-31.png",
        "/images/anh-32.png",
      ],
      github: "https://github.com/Hylra-2105/tour-booking-1",
    },
    {
      title: "Tour Booking UI-2",
      description:
        "Created a responsive tour booking frontend using HTML, CSS, JavaScript, and Pug template engine. Focused on clean design, interactive forms, and an intuitive user experience for booking and tour management.",
      tech: ["HTML", "CSS", "JavaScript"],
      images: [
        "/images/anh-10.png",
        "/images/anh-11.png",
        "/images/anh-12.png",
        "/images/anh-13.png",
        "/images/anh-14.png",
        "/images/anh-15.png",
        "/images/anh-16.png",
        "/images/anh-17.png",
        "/images/anh-18.png",
      ],
      github: "https://github.com/Hylra-2105/tour-management-ui",
    },
    {
      title: "Hotel Booking System (Java Swing)",
      description: `
      A hotel booking and management system built with Java Servlet & JSP. 
      Includes room management, booking system, discounts, authentication, email notifications, 
      and admin dashboard with reporting.

      Team: 5 members

      My Role:
      • Built admin revenue dashboard with Chart.js
      • Implemented OTP email verification & forgot-password flow
      • Developed login & registration system (secure password hashing)
      • Edit profile, user avatar upload & storage
      • Authentication & access control filters
      `,
      tech: ["Java Servlet", "JSP", "JDBC", "MySQL", "Bootstrap"],
      images: [
        "/images/anh-1.png",
        "/images/anh-2.png",
        "/images/anh-3.png",
        "/images/anh-4.png",
        "/images/anh-5.png",
        "/images/anh-6.png",
        "/images/anh-7.png",
        "/images/anh-8.png",
        "/images/anh-9.png",
      ],
      github: "https://github.com/Hylra-2105/hotel-booking",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-gray-900 text-white px-6 relative"
    >
      <div className="flex flex-col gap-24 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="border border-gray-700 rounded-lg p-6 bg-gray-800/60 shadow-lg">
              <h3 className="text-2xl font-semibold mb-3">{p.title}</h3>
              <p className="text-gray-300 mb-4 whitespace-pre-line">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 border border-cyan-500/40 text-cyan-300 rounded-md text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-medium transition mb-6"
                >
                  <FaGithub className="w-5 h-5 text-cyan-400" />
                  GitHub
                </a>
              )}

              {p.images.length > 0 && (
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-6">
                  {p.images.map((img, j) => (
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      key={j}
                      src={img}
                      alt={`${p.title}-${j}`}
                      className="rounded-md border border-gray-700 object-cover w-full h-24 cursor-pointer"
                      onClick={() => setZoomImg(img)}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {zoomImg && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomImg(null)}
          >
            <motion.img
              src={zoomImg}
              alt="Zoomed"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-[90vw] max-h-[85vh] rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
