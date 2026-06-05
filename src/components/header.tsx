import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import * as React from "react";

export default function Header() {
  return (
    <header className="w-full px-4 py-5 sticky top-0 z-50 bg-black/40 border-b border-white/10 backdrop-blur-md text-white shadow-lg">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="font-logo text-[#e2f1ff] text-5xl font-bold tracking-wide hover:text-cyan-400 transition-colors"
        >
          Huy Porfolio
        </Link>

        {/* Menu desktop */}
        <nav className="flex flex-1 justify-end">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-8 font-bold text-white/80">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/#home" className="text-xl hover:text-white transition-colors duration-300">
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/#about" className="text-xl hover:text-white transition-colors duration-300">
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/#projects" className="text-xl hover:text-white transition-colors duration-300">
                    Project
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/#blog" className="text-xl hover:text-white transition-colors duration-300">
                    Blog
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/#contact" className="text-xl hover:text-white transition-colors duration-300">
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </div>
    </header>
  );
}
