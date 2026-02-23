import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "C++", "C#", "JavaScript", "HTML", "CSS", "SQL", "MongoDB", "Assembly"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Flask", "Spring Boot", "ASP.NET", "ADO.NET", "React", "Tailwind CSS"]
  },
  {
    title: "Tools & Concepts",
    skills: ["Git", "Docker", "Azure", "OOP", "Networking", "System Design", "Parallel Computing"]
  }
];

export function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section id="skills" className="py-24 bg-secondary/30 relative border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Technical Arsenal" />

        <div className="mt-16 space-y-16">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-2xl font-bold font-display text-foreground mb-6 flex items-center gap-4">
                <span className="w-8 h-1 bg-primary rounded-full" />
                {category.title}
              </h3>
              
              <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map(skill => (
                  <motion.div
                    key={skill}
                    variants={item}
                    className="px-5 py-2.5 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/5 text-foreground hover:text-primary transition-all duration-300 font-medium cursor-default shadow-sm"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
