import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "SignLanguage Connect",
    description: "Mobile app translating speech to sign language using avatars and smart sensors, bridging communication gaps for the deaf community.",
    tags: ["Mobile", "Sensors", "AI/Avatars"],
    github: "#",
    live: "#"
  },
  {
    title: "Campus Management System",
    description: "Full-stack university platform featuring robust role-based access control, course management, and administrative dashboards.",
    tags: ["ASP.NET", "SQL", "Full-stack", "RBAC"],
    github: "#",
    live: "#"
  },
  {
    title: "Parallel Word Count",
    description: "High-performance text analysis tool built with C++ utilizing OpenMP to achieve massive speedups on large datasets.",
    tags: ["C++", "OpenMP", "Parallel Computing"],
    github: "#",
  },
  {
    title: "Reliable Transport Protocol",
    description: "Socket-based reliable data transmission implemented in Python, ensuring data integrity over lossy network simulations.",
    tags: ["Python", "Sockets", "Networking"],
    github: "#",
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-secondary/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A selection of my best technical work spanning web development, networking, and systems programming."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full flex flex-col bg-card/80 backdrop-blur border-border/50 hover:border-primary/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden group">
                <CardHeader className="pb-4 pt-8 px-8">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <FolderGit2 className="w-8 h-8" />
                    </div>
                    <div className="flex gap-3">
                      {project.github && (
                        <a href={project.github} className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noreferrer">
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noreferrer">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground font-display">{project.title}</h3>
                </CardHeader>
                <CardContent className="px-8 pb-6 flex-grow">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter className="px-8 pb-8 pt-0 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
