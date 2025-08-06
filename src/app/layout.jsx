import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-roboto', // (необов’язково, для CSS змінної)
})


export const metadata = {
  title: "Альфабуд (Дистриб'ютор Semin та Армстронг Україна) - Офіційний Сайт",
  description: "Фіційний дистриб'ютор з продажу підвісних стель KCS та  будівельних сумішів Semin",
  icons: {
    icon: "/favicon.png", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ua">
      <body className={`${roboto.variable} `}>
        <Header/>
        <main> {children} </main>
        <Footer/>
      </body>
    </html>
  );
}
