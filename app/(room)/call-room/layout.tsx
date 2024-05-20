import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Call Room",
  description: "Room by Zoom-clone app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body
      className={
        inter.className + " " + "h-screen w-full  bg-[#1C1F2E]  text-slate-200"
      }
    >
      <div className="flex min-h-full w-full">
        <main className="pl-7 pr-7 pb-7 pt-14 bg-[#161925] min-h-full w-full">
          {children}
        </main>
      </div>
    </body>
  );
}
