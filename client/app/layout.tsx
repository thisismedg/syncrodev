import type { Metadata } from "next";
import "@/styles/globals.scss";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Syncro.dev",
  description: "Syncro.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
