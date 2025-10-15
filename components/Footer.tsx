import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Rich Ferguson. All rights reserved.
          </div>
          <Button asChild>
            <a href="/resume.pdf" download aria-label="Download resume as PDF">
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
