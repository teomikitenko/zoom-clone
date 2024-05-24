import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import Provider from "@/components/Provider";
import { dark } from "@clerk/themes";

export const metadata: Metadata = {
  title:'YOOM'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html>
        <Provider>{children}</Provider>
      </html>
    </ClerkProvider>
  );
}
