import { Inter } from "@next/font/google";
import "./globals.css";
import {Navbar} from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-[#111010] max-w-2xl px-2 mx-auto">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
