import { Github, Facebook, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-warning text-warning-foreground py-6 border-t-2">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 text-sm">
        <span>© 2025 Your Name. All rights reserved.</span>
        <span className="font-bold text-warning-logo flex gap-4">
            
            <Link href="https://github.com/HuyPoti">
              <Github/>
            </Link>
            <Link href="https://www.linkedin.com/in/huy-nguyen-gia-46bb6a35b/">
              <Linkedin/>
            </Link>
            <Link href="https://www.facebook.com/ghuy.nguyen.2024">
              <Facebook/>
            </Link>
            <Link href="mailto:khoahocgiahuy@gmail.com">
              <Mail/>
            </Link>            
        </span>
      </div>
    </footer>
  )
}