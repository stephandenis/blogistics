import "./globals.css";
import { Afacad } from "next/font/google";
import { Exo } from "next/font/google";
import { Rubik } from "next/font/google";

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

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // adjust to the weights you need
  variable: "--font-rubik",
  display: "swap",
});

export const metadata = {
  title: "Blogistics",
  description: "Aliados en tu crecimiento.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body
        className={`font-afacad ${afacad.variable} font-exo ${exo.variable} antialiased ${rubik.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
