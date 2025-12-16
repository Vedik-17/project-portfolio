import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Globe, Brain, Wrench } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Programming',
      icon: Code,
      skills: ['C', 'Python', 'Java'],
      color: 'blue',
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'],
      color: 'green',
    },
    {
      title: 'AI/ML',
      icon: Brain,
      skills: ['Machine Learning', 'NLP', 'AI Models'],
      color: 'purple',
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'VS Code', 'Eclipse', 'Replit', 'Vercel'],
      color: 'orange',
    },
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-100 dark:bg-blue-900/30',
      icon: 'bg-blue-600',
      badge: 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300',
    },
    green: {
      bg: 'bg-green-100 dark:bg-green-900/30',
      icon: 'bg-green-600',
      badge: 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300',
    },
    purple: {
      bg: 'bg-violet-100 dark:bg-violet-900/30',
      icon: 'bg-violet-600',
      badge: 'bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-300',
    },
    orange: {
      bg: 'bg-orange-100 dark:bg-orange-900/30',
      icon: 'bg-orange-600',
      badge: 'bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300',
    },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              const colors = colorClasses[category.color as keyof typeof colorClasses];

              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`${colors.bg} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`${colors.icon} p-3 rounded-lg`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={
                          isInView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0.8 }
                        }
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1 + skillIndex * 0.05,
                        }}
                        className={`${colors.badge} px-3 py-1 rounded-full text-sm font-medium`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
