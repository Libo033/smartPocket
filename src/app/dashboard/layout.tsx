import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "../globals.css";
import SideBar from "@/components/navigation/SideBar";
import FloatingNav from "@/components/navigation/FloatingNav";

const titi = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Smart Pocket",
  description: "APP de control de gastos personales.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={titi.className + " dashboardBody"}>
        <SideBar />
        <FloatingNav />
        {children}
      </body>
    </html>
  );
}
