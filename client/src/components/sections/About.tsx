import { motion } from "framer-motion";
import { Code2, Cpu, Globe } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Code2,
    title: "Software Development",
    description: "Building scalable and maintainable applications with clean architecture."
  },
  {
    icon: Globe,
    title: "Web Applications",
    description: "Creating responsive, modern full-stack web platforms."
  },
  {
    icon: Cpu,
    title: "Systems & Algorithms",
    description: "Optimizing performance through low-level programming and parallel computing."
  }
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="About Me" 
          subtitle="Computer Science student specializing in Software Development with strong skills in algorithms, web applications, and systems programming."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-card/50 backdrop-blur border-border/50 h-full hover:border-primary/50 transition-colors duration-300">
                <CardContent className="p-8 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-primary/20 blur-3xl rounded-full" />
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed max-w-4xl relative z-10">
            "I am deeply passionate about bridging the gap between low-level system performance and high-level application architecture. My experience ranges from socket programming in Python and parallel computing in C++ to full-stack web platforms."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
