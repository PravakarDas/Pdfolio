import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";

const montserrat = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});



export const metadata: Metadata = {
  title: "Pravakar | backend developer",
  description: `Hi, I’m Pravakar Das, a developer working on real-world projects using my technical skills
Please feel free to explore my repositories
I’m always open to feedback and constructive advice. Your suggestions will help me improve, and I’ll do my best to implement them`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.className} flex flex-col  `}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
