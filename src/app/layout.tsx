"use client";
import "./globals.css";
import { Flowbite, ThemeModeScript } from "flowbite-react";
import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";
import customTheme from "@/config/customTheme";
import { DealModalProvider } from "@/contexts/DealModalContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body>
        <Flowbite theme={{ theme: customTheme }}>
          <DealModalProvider>
            <Header />
            <main className="flex">
              <Sidebar />
              <div className="flex-grow p-6">{children}</div>
            </main>
          </DealModalProvider>
        </Flowbite>
      </body>
    </html>
  );
}
