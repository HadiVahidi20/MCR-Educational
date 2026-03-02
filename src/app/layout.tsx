import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MCR Educational - Empowering Young People Through Dance, Education & Support",
  description: "The dedicated educational arm of MCR HQ CIC, providing alternative education provision for young people in Greater Manchester.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
