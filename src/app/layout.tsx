import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import GoogleAnalytics from "@/app/GoogleAnalytics";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout(
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <AppHeader/>
        {children}
        <AppFooter/>
        <GoogleAnalytics/>
        </body>
        </html>
    );
}
