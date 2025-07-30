import type { Metadata } from "next";
import { Blinker } from "next/font/google";
import '../styles/globals.scss';
import { UserProvider } from "@/context/UserContext";

export const blinker = Blinker({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-blinker',
});

export const metadata: Metadata = {
  title: "Decamond Task",
  description: "Login page project | Decamond",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${blinker.variable} antialiased`}
      >
        <UserProvider>
          {children}
        </UserProvider>
        
      </body>
    </html>
  );
}
