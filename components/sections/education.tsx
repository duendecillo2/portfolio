"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, School } from "lucide-react";

interface EducationItem {
  school: string;
  degree: string;
  period: string;
  grade: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const education: EducationItem[] = [
  {
    school: "Universidad Empresarial 'Siglo 21'",
    degree: "Bachelor of Science - BS, Computer Software Engineering",
    period: "Oct 2025 - Jun 2027",
    grade: "8.00",
    description: "Focus on scalable software architectures, cloud computing strategies, and agile project management for enterprise environments.",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "bg-indigo-500",
  },
  {
    school: "Universidad Tecnológica Nacional",
    degree: "Bachelor's in Systems Engineering",
    period: "Apr 2022 - Oct 2025",
    grade: "8.00",
    description: "Information Systems Engineering focuses on designing, implementing, organizing, and managing the information systems required by public and private organizations. It combines knowledge of mathematics, programming, data management, software, hardware, and networks.",
    icon: <BookOpen className="w-6 h-6" />,
    color: "bg-emerald-500",
  },
  {
    school: "Nuestra Señora De Luján",
    degree: "Bachelor of Science - BS, Social Sciences",
    period: "Mar 2016 - Dec 2021",
    grade: "8.70",
    description: "Developed strong analytical foundations, critical thinking, and communication skills essential for effective stakeholder management and team leadership.",
    icon: <School className="w-6 h-6" />,
    color: "bg-purple-500",
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
          Academic <span className="text-indigo-500">Background</span>
        </h2>
        <div className="h-1 w-20 bg-indigo-500 rounded-full"></div>
      </motion.div>

      <div className="space-y-8 relative border-l border-gray-800 ml-3 md:ml-6 pl-8 md:pl-12">
        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            {/* Timeline Dot with Icon */}
            <div className={`absolute -left-[54px] md:-left-[74px] top-0 h-10 w-10 md:h-12 md:w-12 rounded-full border-4 border-gray-950 ${item.color} flex items-center justify-center text-white shadow-lg shadow-${item.color}/20`}>
              {item.icon}
            </div>

            <div className="glass-card p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{item.school}</h3>
                  <div className="text-lg font-medium text-indigo-400">{item.degree}</div>
                </div>
                <div className="flex flex-col items-start md:items-end mt-2 md:mt-0">
                  <span className="text-sm font-mono text-gray-500 bg-gray-900/50 px-3 py-1 rounded-full border border-gray-800 mb-2">
                    {item.period}
                  </span>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded border border-emerald-400/20">
                    Grade: {item.grade}
                  </span>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
