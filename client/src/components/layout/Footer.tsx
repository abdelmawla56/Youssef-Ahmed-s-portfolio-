import { Github, Linkedin, Terminal } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-card border-t border-border/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 group">
            <div className="bg-primary/10 p-2 rounded-lg text-primary">
              <Terminal className="w-5 h-5" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              Youssef<span className="text-primary">.dev</span>
            </span>
          </div>
          
          <p className="text-muted-foreground text-sm">
            © {year} Youssef Abd El-Mawla. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/abdelmawla56" 
              target="_blank" 
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/youssef-abd-el-mawla" 
              target="_blank" 
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
