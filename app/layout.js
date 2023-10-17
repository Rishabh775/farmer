import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Suvidha | Kisan ke Sath bhi Aur uske badh bhi",
  description: "Kisan ke Sath bhi Aur uske badh bhi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" type="image/x-icon"></link>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
