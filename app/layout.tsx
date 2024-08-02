import type { Metadata } from "next";
import { Baskervville, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const baskerville = Baskervville({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Empire Hire",
  description: "Toronto's leading staffing agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/EHLogo.jpeg" type="image/png" />
      </head>
      <body className={baskerville.className}>
        
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        
      </body>
    </html>
  );
}
