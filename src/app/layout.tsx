import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";

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
      <body style={{ margin: "0px" }} className={titi.className}>
        {children}
      </body>
    </html>
  );
}
