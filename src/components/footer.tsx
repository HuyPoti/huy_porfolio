import { Github, Facebook, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-warning text-warning-foreground py-6 border-t-2">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 text-sm">
        <span>© 2025 Your Name. All rights reserved.</span>
        <span className="font-bold text-warning-logo flex gap-4">
            <Github/>
            <Linkedin/>
            <Facebook/>
            <Mail/>
        </span>
      </div>
    </footer>
  )
}