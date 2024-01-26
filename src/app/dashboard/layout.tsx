import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "../globals.css";
import SideBar from "@/components/navigation/SideBar";
import FloatingNav from "@/components/navigation/FloatingNav";
import { CategoryContextProvider } from "@/context/CategoryContext";
import { MovementContextProvider } from "@/context/MovementsContext";

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
      <body style={{margin: "0"}} className={titi.className}>
        <CategoryContextProvider>
          <MovementContextProvider>
            <div className="dashboardBody">
              <SideBar />
              <FloatingNav />
              {children}
            </div>
          </MovementContextProvider>
        </CategoryContextProvider>
      </body>
    </html>
  );
}
