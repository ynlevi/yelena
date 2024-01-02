import { Inter } from "next/font/google";
import { Assistant } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
const assistant = Assistant({
  weight: ["200", "300", "400", "500", "700"],
  subsets: ["hebrew"],
});
export const metadata = {
  title: "Yelena Weissman",
  description: "a premium interior design experience in Israel",
  icons: "yelena-icon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body className={assistant.className}>
        <div className="flex flex-col lg:flex-row ">
          <Header />
          <div id="content" className="min-h-screen w-full lg:mr-36 ">
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
