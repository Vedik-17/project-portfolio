import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Developer and AI/ML Enthusiast currently pursuing my B.Tech in Computer Science and Engineering. With a strong foundation in both frontend and backend technologies, I create innovative web applications that solve real-world problems.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My journey in technology is driven by curiosity and a desire to build impactful solutions. I specialize in creating responsive, user-friendly interfaces while also exploring the fascinating world of artificial intelligence and machine learning.
              </p>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <MapPin size={20} />
                <span>Hyderabad, Telangana, India</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-blue-50 to-gray-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <GraduationCap size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Education
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Bachelor of Technology
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-1">
                    Computer Science and Engineering
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    2022 - 2026
                  </p>
                  <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <span className="text-blue-800 dark:text-blue-300 font-semibold">
                      GPA: 8.21
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
