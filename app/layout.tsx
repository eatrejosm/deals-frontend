"use client";
import { Flowbite, ThemeModeScript } from "flowbite-react";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";
import customTheme from "@/config/customTheme";

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
            <div className="p-5">{children}</div>
          </main>
        </Flowbite>
      </body>
    </html>
  );
}
