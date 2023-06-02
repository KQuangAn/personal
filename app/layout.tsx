import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Portfoilio",
  description: "me ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <Navbar />
        </div>

        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
