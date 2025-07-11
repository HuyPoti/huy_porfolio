"use client"

import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import * as React from "react"
import { Moon, Sun,  } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
    const { setTheme } = useTheme();
    return (
        <header className="w-full px-4 py-5 shadow-sm sticky top-0 z-50 bg-warning text-warning-foreground">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
            {/* Logo */}
            <Link href="/" className="text-warning-logo text-5xl font-[Alex_Brush] font-bold tracking-wide">
            Huy Porfolio
            </Link>

            {/* Menu desktop */}
            <nav className="flex flex-1 justify-center">
            <NavigationMenu>
                <NavigationMenuList className="flex gap-5 font-bold">
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                    <Link href="/" className="text-xl transition">Home</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                    <Link href="/about" className="text-xl transition">About</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                    <Link href="/project" className="text-xl transition">Project</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                    <Link href="/blog" className="text-xl transition">Blog</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                    <Link href="/contact" className="text-xl transition">Contact</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                
                </NavigationMenuList>
            </NavigationMenu>
            </nav>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                    <span className="sr-only">Toggle theme</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
        </header>
    )
}