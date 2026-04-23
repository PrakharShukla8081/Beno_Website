import type { Metadata } from "next";
import { Maven_Pro } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import FloatingWindow from "@/components/common/floatingwindow";
import AOSWrapper from "@/components/common/AOSWrapper";
import { Toaster } from "react-hot-toast";
import WhatsAppButton from "@/components/whatsapp";
import Script from "next/script";

const mavenPro = Maven_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-maven-pro",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Beno Support - AI, IT Consulting, BPO, Cybersecurity & Digital Transformation Services",
  description:
    "Beno Support is a trusted global IT and BPO solutions provider offering AI automation, IT consulting, cybersecurity, cloud services, HR outsourcing, and digital transformation for enterprises across multiple industries.",
  keywords:
    "Beno Support, IT services company India, digital transformation, AI automation, BPO services, cloud consulting, cybersecurity services, software development, managed IT support",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={`${mavenPro.variable} antialiased bg-white text-bblack`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TFRC8TQ5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Header />
        <AOSWrapper />
        <main>{children}</main>
        <Footer />
        <FloatingWindow />
        {/* <ScrollToTop /> */}
        <Toaster position="top-right" />
        {/* <TawkMessenger /> */}
        <WhatsAppButton showLabel={false} label="WhatsApp Us" />

        {/* Google Tag Manager Script */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TFRC8TQ5');
            `,
          }}
        />
      </body>
    </html>
  );
};

export default RootLayout;
