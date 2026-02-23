import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const experiences = [
  {
    role: "Embedded Systems Intern",
    company: "Siemens",
    period: "Jul 2025 - Sep 2025",
    description: "Assisted in the design and testing of embedded firmware. Participated in real-world automation and industrial hardware integration tasks.",
    current: true
  },
  {
    role: "Technical Manager & Instructor",
    company: "Robosphere",
    period: "Jun 2025 - Sep 2025",
    description: "Led technical operations and instructed students in robotics, programming, and mechanical design concepts.",
    current: false
  },
  {
    role: "Sales Manager",
    company: "Pea Learning Academy",
    period: "Sep 2024 - Nov 2024",
    description: "Managed client relations, improved sales strategies, and handled educational package distribution resulting in increased enrollments.",
    current: false
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Work Experience" alignment="left" />

        <div className="mt-16 relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative pl-8 md:pl-24"
              >
                {/* Node */}
                <div className={`absolute left-[-4px] md:left-[28px] top-1.5 w-2.5 h-2.5 rounded-full border-2 ${
                  exp.current ? "bg-primary border-primary ring-4 ring-primary/20" : "bg-background border-muted-foreground"
                }`} />

                <div className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 hover:shadow-xl hover:shadow-black/20 hover:border-primary/30 transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-lg text-muted-foreground mt-1">
                        <Briefcase className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium whitespace-nowrap h-fit">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
