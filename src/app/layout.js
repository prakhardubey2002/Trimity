import { Michroma } from "next/font/google";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";
const inter =  Michroma({ subsets: ["latin"],weight:"400" });

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
            {children}
          </ConvexClientProvider>
        </UserProvider>
      </body>
    </html>
  );
}
