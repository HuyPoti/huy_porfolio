import Header from "@/components/header"
import "./globals.css"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="font-parastoo font-alex">
      <body className="min-h-screen antialiased flex flex-col bg-warning-gradient">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1 text-warning-foreground">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
