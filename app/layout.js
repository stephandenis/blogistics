import "./globals.css";
import { Afacad } from "next/font/google";
import { Exo } from "next/font/google";

const afacad = Afacad({
  variable: "--font-afacad",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const exo = Exo({
  subsets: ["latin"],
  weight: ["400", "600"], // 400 para normal, 600 para SemiBold
  variable: "--font-exo",
});

export const metadata = {
  title: "Blogistics",
  description: "Soluciones logísticas integrales",
};

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body
        className={`font-afacad ${afacad.variable} font-exo ${exo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
