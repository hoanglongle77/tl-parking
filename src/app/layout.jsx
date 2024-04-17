import { Inter } from "next/font/google";
import "./globals.css";
import BootstrapClient from "@/components/BoostrapClient/BootstrapClient";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { DataProvider } from "@/context/DataContext";
import { AdminProvider } from "@/context/AdminContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DataProvider>{children}</DataProvider>
        <BootstrapClient />
      </body>
    </html>
  );
}
