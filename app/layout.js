"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import Script from "next/script";
import Link from "./Link";
import HomeLink from "./HomeLink";
import Footer from './Footer';

import { serif } from "./fonts";
import "./global.css";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isActive = pathname === "/";

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({ pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false }, 'google_translate_element');
    };
  }, []);

  return (
    <html lang="en" className={serif.className}>
      <head>
        <meta name="google-site-verification" content="puNbCakpNRksL6MU0jb5G4IlHfPIr9KoUcnSnOklRz8" />
        <meta name="algolia-site-verification"  content="7D912E2945E11F06" />
        <Script strategy="afterInteractive" src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></Script>
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-L0YQ2HEGZJ"></Script>
        <Script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-L0YQ2HEGZJ');
        `}
        </Script>
        <Script strategy="beforeInteractive" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" async crossOrigin="anonymous"></Script>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5641491107630454" crossOrigin="anonymous"></Script>
      </head>
      <body className="mx-auto max-w-3xl bg-[--bg] px-5 py-12 text-[--text]">
        <header className="mb-14 flex flex-row place-content-between">
          <HomeLink />
          <span className="relative top-[4px] italic">
            by{" "}
            <Link href="https://zisheng.pro" target="_blank">
              <img
                alt="Aaron Young"
                src="https://www.zisheng.pro/avatar.png"
                className="relative -top-1 mx-1 inline h-8 w-8 rounded-full"
              />
            </Link>
          </span>
        </header>
        <main>
          {children}
        </main>
        <footer className="space-y-2">
          <div className="flex justify-center space-x-2 text-[13px] text-gray-700 dark:text-gray-300">
            <span>Page visits: <span id="busuanzi_value_page_pv"></span></span>
            <span>Site visits: <span id="busuanzi_value_site_pv"></span></span>
            <span>Site visitors: <span id="busuanzi_value_site_uv"></span></span>
          </div>
          <div className="flex justify-center space-x-2">
            {isActive ? <Footer /> : null}
          </div>
        </footer>
      </body>
    </html>
  );
}
