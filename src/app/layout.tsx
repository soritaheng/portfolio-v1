import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const links = [{path: '/', name: 'Home'}, { path: '/projects', name: 'Projects'}, { path: '/contact', name: 'Contact'}];

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex`}>
        <header className="flex flex-col gap-4 font-semibold text-4xl">
          {links.map((link) => (
            <Link className="hover:underline-offset-8 hover:underline" href={link.path}>{link.name}</Link>
          ))}
        </header>
        {children}
        </body>
    </html>
  );
}
