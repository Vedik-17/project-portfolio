import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Recipe Finder Website',
      description:
        'A dynamic web application that helps users discover recipes based on available ingredients, featuring an intuitive search interface and detailed recipe information.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Vedik-17/recipe-finder-',
      demo: null,
    },
    {
      title: 'AI Chatbot',
      description:
        'An intelligent conversational AI chatbot powered by natural language processing, capable of understanding context and providing relevant responses.',
      techStack: ['Python', 'NLP'],
      github: null,
      demo: null,
    },
    {
      title: 'Crypto Tracker',
      description:
        'Real-time cryptocurrency tracking application that monitors price changes, market trends, and provides detailed analytics for various digital currencies.',
      techStack: ['React', 'JavaScript'],
      github: 'https://github.com/Vedik-17/cripto-tracker',
      demo: null,
    },
    {
      title: 'Virtual Classroom Portal',
      description:
        'A comprehensive educational platform enabling online learning with features for course management, student enrollment, and interactive learning materials.',
      techStack: ['Java', 'HTML', 'CSS'],
      github: 'https://github.com/Vedik-17/Virtual-Classroom-Portal',
      demo: null,
    },
    {
      title: 'Task Tracker',
      description:
        'A productivity application for managing tasks and projects with features for deadline tracking, priority setting, and progress monitoring.',
      techStack: ['TypeScript', 'JavaScript'],
      github: 'https://github.com/Vedik-17/task-tracker',
      demo: null,
    },
    {
      title: 'AI Email Responder',
      description:
        'An intelligent email response system using machine learning to analyze incoming emails and generate appropriate automated responses.',
      techStack: ['Python', 'ML'],
      github: 'https://github.com/Vedik-17/email_responder',
      demo: null,
    },
  ];

  return (
    <section
      id="projects"
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
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                      >
                        <Github size={18} />
                        <span className="text-sm font-medium">View Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink size={18} />
                        <span className="text-sm font-medium">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
