import "./globals.css";
import localFont from "next/font/local";
import {
  DM_Sans,
  MuseoModerno,
  Poppins,
  Raleway,
  Space_Grotesk,
  Space_Mono,
} from "next/font/google";

const museo = Space_Grotesk({ subsets: ["latin"], weight: "400" });
const space_mono = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-mono",
  weight: "400",
});

export const metadata = {
  title: "🐼dev_panda",
  description: "portfolio",
};

const mexa = localFont({
  src: "./MexaRegular.otf",
  display: "swap",
  variable: "--font-mexa",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${museo.className} ${space_mono.variable} ${mexa.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
