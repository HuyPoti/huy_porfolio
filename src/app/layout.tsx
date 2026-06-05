import Header from "@/components/header"
import "./globals.css"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import GlowProvider from "@/components/glow-provider"
import { Alex_Brush} from "next/font/google"

// // Import Google Fonts đúng cách
const alexBrush = Alex_Brush({
  subsets: ['vietnamese'],
  weight: "400",
  variable: "--font-alex-brush",
  display: "swap",
})
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }} suppressHydrationWarning>
      <body className={`${alexBrush.variable} min-h-screen antialiased flex flex-col bg-warning-gradient`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <GlowProvider>
            <Header />
            <main className="flex-1 text-warning-foreground">{children}</main>
            <Footer />
          </GlowProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
