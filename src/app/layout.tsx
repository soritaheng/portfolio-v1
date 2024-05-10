import { inter, ibm_plex_mono } from "./fonts";
import "./globals.css";
import Link from "next/link";

const pages = [{path: '/', name: 'Home'}, { path: '/projects', name: 'Projects'}, { path: '/contact', name: 'Contact'}];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibm_plex_mono.className} flex flex-col gap-4 md:flex-row m-8`}>
        <header className={`${inter.className} flex md:flex-col gap-6 md:gap-4 font-semibold md:text-3xl text-xl justify-center md:justify-normal`}>
          {pages.map((page) => (
            <Link className="hover:underline-offset-8 hover:underline" key={page.name} href={page.path}>{page.name}</Link>
          ))}
        </header>
        <main className="w-full">
          <div className="w-fit md:w-[60vw] mx-auto">
            {children}
          </div>
        </main>
        </body>
    </html>
  );
}
