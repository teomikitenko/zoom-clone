import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import LeftBar from "@/components/LeftBar";
import Modals from "@/components/Modals/Modals";
import Header from "@/components/Header";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body
      className={
        inter.className +
        " " +
        "min-h-screen w-full  bg-[#1C1F2E]  text-slate-200 flex-col relative"
      }
    >
      <Header/>
      <div className="flex min-h-full w-full">
        <LeftBar />
        <main className="px-9 sm:px-9 lg:px-6 pb-7 pt-24 bg-[#161925] min-h-screen min-w-[370px] max-w-[1500px] w-full">
          {children}
        </main>
        <Toaster />
      </div>
      <Modals />
    </body>
  );
}
