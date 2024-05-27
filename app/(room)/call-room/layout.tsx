import { Inter } from "next/font/google";
import "../../globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RoomLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body
      className={
        inter.className + " " + "min-h-screen w-full  bg-[#1C1F2E]  text-slate-200"
      }
    >
       <div className="min-h-full w-full">
        <main className="px-7 pb-7 pt-14 bg-[#161925] min-h-screen min-w-[370px] w-full">
          {children}
        </main>
      </div> 
    </body>
  );
}
