import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API Key Breach Alerter — Monitor if your API keys appear online",
  description: "Continuously monitors GitHub, Pastebin, and public sources for exposed API keys. Get instant alerts when your secrets are found in the wild."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8e211cdf-ebd8-4fb7-9e72-33be3bdac425"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
