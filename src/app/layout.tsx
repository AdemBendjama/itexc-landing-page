import type { Metadata } from "next";
import "@/styles/globals.css";
import Body from "@/components/ui/body";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "ITEXC Group | Persue excellence",
  description:
    "Empowering businesses with cutting-edge software development, design, and system integration",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Body>
        {children}
        <Footer />
      </Body>
    </html>
  );
}
