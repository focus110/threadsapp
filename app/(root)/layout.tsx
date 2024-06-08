import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import Topbar from "../components/shared/Topbar";
import LeftSidebar from "../components/shared/LeftSidebar";
import RightSidebar from "../components/shared/RightSidebar";
import Bottombar from "../components/shared/Bottombar";
import "../globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js",
  description: "Thread application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Topbar />
          <main>
            <LeftSidebar />
            <section className="main-container">
              <div className="w-full ma-w-4xl">{children}</div>
            </section>
            <RightSidebar />
          </main>
          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
}
