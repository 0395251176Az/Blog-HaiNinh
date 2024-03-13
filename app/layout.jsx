import { Outfit } from "next/font/google";
import "./globals.css";

// compoenents
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// theme provider
import { ThemeProvider } from "@/components/ThemeProvider";
import Provider from "@/components/Provider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Dr. Hani",
    default: "Dr. Hani",
    icons: {
      icon: "/favicon.ico",
    },
  },
  description: "The official Next.js Learn Dashboard built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({ children }) {
  const segment = children.props.childProp.segment;
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Provider>
            {segment !== "dashboard" && <Header />}

            {children}
            {segment !== "dashboard" && segment !== "(auth)" && <Footer />}
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
