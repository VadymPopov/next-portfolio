import { getPages } from "@/sanity/sanity-utils";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "../globals.css";
import Header from "@/app/components/header";
import NextTopLoader from "nextjs-toploader";
import { Providers } from "./providers";

const font = Work_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vadym | Fullstack Dev",
  description: "Fullstack Developer",
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pages = await getPages();

  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css'
        />
        <link rel='icon' href='/app/favicon.ico' sizes='any' />
      </head>

      <body className={`flex flex-col min-h-screen ${font.className}`}>
        <Providers>
          <NextTopLoader
            color='#3b82f6'
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing='easeIn'
            speed={200}
            shadow='0 0 10px #3b82f6, 0 0 5px #3b82f6'
          />
          <Header pages={pages} />
          <main className='lg:ml-40 lg:mr-24 lg:mt-20 md:ml-32 md:mr-16 md:mt-24 sm:mt-16 sm:ml-28 sm:mr-8 mt-12 mx-4'>
            {children}
          </main>
          <footer className='flex items-baseline justify-center lg:px-7 lg:py-14 mt-auto px-5 py-10 '>
            <p>&copy; {new Date().getFullYear()} Vadym Popov </p>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
