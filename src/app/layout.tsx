import type { Metadata } from "next";
import { inter, ibm_plex_mono } from "./fonts";
import "./globals.css";
import Link from "next/link";

const pages = [{path: '/', name: 'Home'}, { path: '/projects', name: 'Projects'}, { path: '/contact', name: 'Contact'}];

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
      <body className={`${ibm_plex_mono.className} flex m-8`}>
        <header className={`${inter.className} flex flex-col gap-4 font-semibold text-4xl`}>
          {pages.map((page) => (
            <Link className="hover:underline-offset-8 hover:underline" key={page.name} href={page.path}>{page.name}</Link>
          ))}
        </header>
        {children}
        </body>
    </html>
  );
}
