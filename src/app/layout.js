import { Michroma } from "next/font/google";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { AuthProvider } from "./Context/AuthContext";
import { Toaster } from "react-hot-toast";
const inter = Michroma({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Trimity",
  description: "Trimity: To Unlock your Focus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <ConvexClientProvider>
            <AuthProvider>
              <Toaster position="top-right" reverseOrder={true} />
              <Navbar />
              {children}
              <Footer />
            </AuthProvider>
          </ConvexClientProvider>
        </UserProvider>
      </body>
    </html>
  );
}
