import "./globals.css";
import { Afacad } from "next/font/google";

const afacad = Afacad({
  variable: "--font-afacad",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "Blogistics",
  description: "Soluciones logísticas integrales",
};

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body className={`font-afacad ${afacad.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
