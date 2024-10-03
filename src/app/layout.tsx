"use client";
import "./globals.css";
import { Flowbite, ThemeModeScript } from "flowbite-react";
import Header from "@/src/components/layouts/Header";
import Sidebar from "@/src/components/layouts/Sidebar";
import customTheme from "@/src/config/customTheme";

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
          <Header />
          <main className="flex">
            <Sidebar />
            <div className="flex-grow p-6">{children}</div>
          </main>
        </Flowbite>
      </body>
    </html>
  );
}
