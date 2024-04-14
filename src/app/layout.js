import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import MyProvider from "@/redux/myProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Auth app",
  description: "This is an authentication app with Redux",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MyProvider>
          <NavBar/>
          {children}
        </MyProvider>
      </body>
    </html>
  );
}
